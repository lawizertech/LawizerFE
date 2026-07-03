"use client";

import { AuthProvider } from "@/context/authContext";
import { CallbackProvider } from "@/context/callbackContext";
import LayoutWrapper from "@/components/client/LayoutWrapper";

export default function RootLayoutClient({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <AuthProvider>
 <CallbackProvider>
 <LayoutWrapper>{children}</LayoutWrapper>
 </CallbackProvider>
 </AuthProvider>
 );
}
