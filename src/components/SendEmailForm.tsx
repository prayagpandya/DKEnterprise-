"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckCircle2, LoaderCircle, UploadCloud, AlertCircle, Eye, EyeOff } from "lucide-react";
import { z } from "zod";

import { sendEmailSchema } from "@/lib/form-schemas";

type SendEmailFormValues = z.infer<typeof sendEmailSchema>;

type SendEmailFormProps = {
  prefilledTo?: string;
  prefilledSubject?: string;
  onSuccess?: () => void;
};

const fieldLabelClass =
  "mb-2 block text-sm font-medium tracking-tight text-slate-700";
const fieldClass = "input-base h-12 rounded-2xl";
const textareaClass = "input-base min-h-32 rounded-2xl py-3 resize-none";

export function SendEmailForm({ prefilledTo = "", prefilledSubject = "", onSuccess }: SendEmailFormProps) {
  const [serverMessage, setServerMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isPending, startTransition] = useTransition();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SendEmailFormValues>({
    resolver: zodResolver(sendEmailSchema),
    defaultValues: {
      to: prefilledTo,
      subject: prefilledSubject,
      senderEmail: "",
      senderPassword: "",
      message: "",
    },
  });

  const attachmentField = register("attachment");

  const onSubmit = (values: SendEmailFormValues) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("senderEmail", values.senderEmail || "");
      formData.append("senderPassword", values.senderPassword || "");
      formData.append("to", values.to);
      formData.append("subject", values.subject);
      formData.append("message", values.message);

      const attachment = values.attachment?.[0];
      if (attachment) {
        formData.append("attachment", attachment);
      }

      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();

        if (response.ok && result.success) {
          setServerMessage({ type: "success", text: result.message });
          reset({
            senderEmail: values.senderEmail, // Keep sender settings for ease of reuse
            senderPassword: values.senderPassword,
            to: "",
            subject: "",
            message: "",
          });
          setSelectedFile(null);
          if (onSuccess) onSuccess();
        } else {
          setServerMessage({ type: "error", text: result.message || "Failed to send email." });
        }
      } catch (err: any) {
        setServerMessage({ type: "error", text: err.message || "Something went wrong." });
      }
    });
  };

  return (
    <div className="card-surface rounded-[1.75rem] p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
          Email Sender Form
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Compose and send an email dynamically using a Gmail account and App Password.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {/* Credentials Section */}
        <div className="bg-slate-50/80 border border-slate-200/60 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">
              Gmail Credentials (Optional)
            </span>
            <span className="text-[11px] text-slate-500 italic">
              Defaults to server .env if empty
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Sender Gmail Address */}
            <div>
              <label className={fieldLabelClass}>Sender Gmail Address</label>
              <input
                {...register("senderEmail")}
                placeholder="example@gmail.com"
                className={fieldClass}
                type="email"
              />
              {errors.senderEmail ? (
                <p className="mt-2 text-xs text-rose-500">{errors.senderEmail.message}</p>
              ) : null}
            </div>

            {/* Sender App Password */}
            <div>
              <label className={fieldLabelClass}>Sender App Password</label>
              <div className="relative">
                <input
                  {...register("senderPassword")}
                  placeholder="xxxx xxxx xxxx xxxx"
                  className={`${fieldClass} pr-10`}
                  type={showPassword ? "text" : "password"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-slate-500 hover:text-slate-700 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.senderPassword ? (
                <p className="mt-2 text-xs text-rose-500">{errors.senderPassword.message}</p>
              ) : null}
            </div>
          </div>
        </div>

        {/* Email Recipient and Subject */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Recipient Email */}
          <div>
            <label className={fieldLabelClass}>Recipient Email*</label>
            <input
              {...register("to")}
              placeholder="recipient@example.com"
              className={fieldClass}
              type="email"
            />
            {errors.to ? (
              <p className="mt-2 text-xs text-rose-500">{errors.to.message}</p>
            ) : null}
          </div>

          {/* Subject */}
          <div>
            <label className={fieldLabelClass}>Subject*</label>
            <input
              {...register("subject")}
              placeholder="Enter email subject"
              className={fieldClass}
            />
            {errors.subject ? (
              <p className="mt-2 text-xs text-rose-500">{errors.subject.message}</p>
            ) : null}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className={fieldLabelClass}>Message Body*</label>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Type your message here..."
            className={textareaClass}
          />
          {errors.message ? (
            <p className="mt-2 text-xs text-rose-500">{errors.message.message}</p>
          ) : null}
        </div>

        {/* Attachment Upload */}
        <div>
          <label className={fieldLabelClass}>Attachment (Optional)</label>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 text-sm font-semibold text-primary-dark transition hover:border-primary/40 hover:bg-primary/10">
              <UploadCloud className="h-4 w-4" />
              Choose File
              <input
                {...attachmentField}
                type="file"
                className="sr-only"
                onChange={(e) => {
                  attachmentField.onChange(e);
                  setSelectedFile(e.target.files?.[0] || null);
                }}
              />
            </label>
            <span className="text-sm text-slate-500">
              {selectedFile
                ? `${selectedFile.name} (${(selectedFile.size / 1024 / 1024).toFixed(2)} MB)`
                : "No file chosen. Supported files up to 5MB"}
            </span>
          </div>
          {errors.attachment ? (
            <p className="mt-2 text-xs text-rose-500">{errors.attachment.message as string}</p>
          ) : null}
        </div>

        {/* Submit Area */}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="button-primary min-w-[12rem] border-0"
          >
            {isPending ? (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Send Email
          </button>
        </div>
      </form>

      {/* Server Status Messages */}
      {serverMessage ? (
        <div
          className={`mt-6 rounded-[1.5rem] border p-4 text-sm transition-all duration-300 ${
            serverMessage.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-rose-200 bg-rose-50 text-rose-800"
          }`}
        >
          <div className="flex items-start gap-3">
            {serverMessage.type === "success" ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600 flex-shrink-0" />
            ) : (
              <AlertCircle className="mt-0.5 h-5 w-5 text-rose-600 flex-shrink-0" />
            )}
            <div>
              <p className="font-semibold">
                {serverMessage.type === "success" ? "Success!" : "Failed to Send"}
              </p>
              <p className="mt-1 opacity-90">{serverMessage.text}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
