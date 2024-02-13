"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import Modal from "./Modal";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";


const AuthModal = () => {


    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();
    const { onClose, isOpen } = useAuthModal();

    useEffect(() => {
        console.log("fffffff", isOpen);

        if (session) {
            router.refresh();
            onClose();
        }
    }, [session, router, onClose, isOpen])


    const onChange = (open: boolean) => {

        if (!open) {
            onClose();
        }
    }
    return (
        <Modal
            title="welcome back" description="login to your account"
            onChange={onChange}
            isOpen={isOpen}
        >

            <Auth theme="dark"
                magicLink
                providers={["github"]}
                supabaseClient={supabaseClient} appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: "#404040",
                                brandAccent: "#22c55e"
                            }
                        }
                    }
                }} />
        </Modal>
    )
}

export default AuthModal;