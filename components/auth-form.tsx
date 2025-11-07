"use client";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";
import { User, Mail, Lock, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { Form } from "./ui/form";
import { CustomInput } from "./customs";
import {
  SignInFormDataType,
  signInSchema,
  SignUpFormDataType,
  signUpSchema,
} from "@/lib/validations";
import { toast } from "sonner";
import { signUp, signIn } from "@/lib/actions/auth.actions";
import { useRouter } from "next/navigation";

type AuthType = {
  type: "SignUp" | "SignIn";
};

const AuthForm = ({ type }: AuthType) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const form = useForm<SignUpFormDataType | SignInFormDataType>({
    defaultValues:
      type === "SignIn"
        ? {
            email: "",
            password: "",
          }
        : {
            name: "",
            username: "",
            email: "",
            password: "",
          },
    resolver: zodResolver(type === "SignUp" ? signUpSchema : signInSchema),
  });

  const onSubmit = async (data: SignUpFormDataType | SignInFormDataType) => {
    try {
      if (type === "SignUp") {
        const res = await signUp(data as SignUpFormDataType);

        if (!res.success) {
          toast.error(`Failed to sign up: ${res.error}`);
          setIsSubmitted(false);
          return;
        }

        toast.success("Signed up successfully");
        setIsSubmitted(true);
      } else {
        // Sign-in
        const res = await signIn(data as SignInFormDataType);

        if (!res.success) {
          toast.error(`Failed to sign in: ${res.error}`);
          return;
        }

        toast.success("Signed in successfully");
        router.replace("/");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      setIsSubmitted(false);
    }
  };

  const password = useWatch({
    control: form.control,
    name: "password"
  });

  if (isSubmitted && type === "SignUp") {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-app-blue/5">
        <MaxWidthWrapper className="paddingY">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Account Created Successfully!
              </h1>

              <p className="text-gray-600 text-lg mb-8">
                Welcome to our platform! Your account has been created
                successfully. We&apos;ve sent a verification email to your
                inbox.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">
                  What&apos;s Next?
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-app-blue" />
                    <span>Check your email to verify your account</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 text-app-blue" />
                    <span>Complete your profile setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Lock className="w-4 h-4 text-app-blue" />
                    <span>Explore our platform features</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button className="bg-app-blue hover:bg-app-blue/90 text-white px-8 py-6">
                    Go to Dashboard
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    setIsSubmitted(false);

                    router.replace("/auth/sign-up");
                  }}
                  variant="outline"
                  className="px-8 py-6"
                >
                  Create Another Account
                </Button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-app-blue/20 via-white to-app-blue/5 py-12">
      <MaxWidthWrapper>
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {type === "SignUp"
                ? "Create Your Account"
                : "Sign in To Your Account"}
            </h1>
            {type === "SignUp" && (
              <p className="text-gray-600 text-lg">
                Join thousands of users who trust our platform
              </p>
            )}
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FieldGroup>
                <FieldSet>
                  {/* Account Information */}
                  <FieldGroup className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <User className="size-6 text-app-blue" />
                      <div>
                        <FieldLegend className="font-bold text-accent-foreground">
                          Account Information
                        </FieldLegend>
                        <FieldDescription className="text-xs text-muted-foreground">
                          {type === "SignUp" ? "Create " : "Enter "}your login
                          credentials
                        </FieldDescription>
                      </div>
                    </div>

                    <div>
                      {type === "SignUp" && (
                        <div className="grid grid-cols-1 gap-6">
                          <CustomInput
                            name="name"
                            control={form.control}
                            label="Full Name"
                            isRequired
                            placeholder="Enter your full name"
                            icon={User}
                          />

                          <CustomInput
                            name="username"
                            control={form.control}
                            label="Username"
                            isRequired
                            placeholder="Choose a username"
                            icon={User}
                          />
                        </div>
                      )}

                      <div className="grid grid-cols-1 gap-6">
                        <CustomInput
                          name="email"
                          control={form.control}
                          label="Email Address"
                          isRequired
                          type="email"
                          placeholder="Enter your email address"
                          icon={Mail}
                        />

                        <div className="relative">
                          <CustomInput
                            name="password"
                            control={form.control}
                            label="Password"
                            isRequired
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            icon={Lock}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Password Requirements */}
                    {type === "SignUp" && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          Password must contain:
                        </p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          <li className="flex items-center">
                            <div
                              className={`w-2 h-2 rounded-full mr-2 ${
                                password?.length >= 8
                                  ? "bg-green-500"
                                  : "bg-gray-300"
                              }`}
                            />
                            At least 8 characters
                          </li>
                          <li className="flex items-center">
                            <div
                              className={`w-2 h-2 rounded-full mr-2 ${
                                /[a-z]/.test(password || "")
                                  ? "bg-green-500"
                                  : "bg-gray-300"
                              }`}
                            />
                            One lowercase letter
                          </li>
                          <li className="flex items-center">
                            <div
                              className={`w-2 h-2 rounded-full mr-2 ${
                                /[A-Z]/.test(password|| "")
                                  ? "bg-green-500"
                                  : "bg-gray-300"
                              }`}
                            />
                            One uppercase letter
                          </li>
                          <li className="flex items-center">
                            <div
                              className={`w-2 h-2 rounded-full mr-2 ${
                                /\d/.test(password || "")
                                  ? "bg-green-500"
                                  : "bg-gray-300"
                              }`}
                            />
                            One number
                          </li>
                        </ul>
                      </div>
                    )}
                  </FieldGroup>
                </FieldSet>

                {/* Terms and Conditions */}
                {type === "SignUp" && (
                  <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 w-4 h-4 text-app-blue bg-gray-100 border-gray-300 rounded focus:ring-app-blue focus:ring-2"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-app-blue hover:underline"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-app-blue hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className={cn(
                    "w-full bg-app-blue hover:bg-app-blue/90 text-white font-semibold",
                    "py-6 rounded-xl text-lg transition-all duration-300",
                    "hover:scale-105 hover:shadow-lg",
                    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
                  )}
                >
                  {form.formState.isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>
                        {type === "SignUp"
                          ? "Creating Account..."
                          : "Signing in..."}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5" />
                      <span>
                        {type === "SignUp" ? "Create Account" : "Sign in"}
                      </span>
                    </div>
                  )}
                </Button>

                {/* Login Link */}
                <div className="text-center mt-6">
                  <p className="text-gray-600">
                    {type === "SignUp"
                      ? " Already have an account?"
                      : "Don't have an account"}{" "}
                    <Link
                      href={
                        type == "SignUp" ? "/auth/sign-in" : "/auth/sign-up"
                      }
                      className="text-app-blue font-semibold hover:underline"
                    >
                      {type === "SignUp" ? "Sign in" : "sign up"}
                    </Link>
                  </p>
                </div>
              </FieldGroup>
            </form>
          </Form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AuthForm;
