"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Briefcase, Github, Mail } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-muted/20">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link href="/" className="flex justify-center items-center gap-2 mb-6">
                    <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                        <Briefcase className="size-6" />
                    </div>
                    <span className="font-bold text-2xl tracking-tight text-foreground">JobGenius</span>
                </Link>
                <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                    Or <Link href="/register" className="font-medium text-primary hover:text-primary/90">create a new account</Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-card py-8 px-4 shadow sm:rounded-xl sm:px-10 border border-border">
                    <form className="space-y-6" action="#">
                        <div>
                            <Label htmlFor="email">Email address</Label>
                            <div className="mt-1">
                                <Input id="email" name="email" type="email" autoComplete="email" required />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="password">Password</Label>
                            <div className="mt-1">
                                <Input id="password" name="password" type="password" autoComplete="current-password" required />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-primary hover:text-primary/90">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <Button type="submit" className="w-full">
                                Sign in
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-border" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <Button variant="outline" className="w-full">
                                <Github className="mr-2 size-4" /> GitHub
                            </Button>
                            <Button variant="outline" className="w-full">
                                <svg className="mr-2 size-4" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                </svg>
                                Google
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
