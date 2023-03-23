import { SocialMediaIcon } from "@/components";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export const FollowUsSocialMedia = () => {
    return (
        <div className="flex items-center gap-4">
            <SocialMediaIcon link="https://www.whatsapp.com/" icon={<FaWhatsapp size={18} color="#FFF" />} />
            <SocialMediaIcon link="https://pt-br.facebook.com/" icon={<FaInstagram size={18} color="#FFF" />} />
            <SocialMediaIcon link="https://www.instagram.com/" icon={<FaFacebook size={18} color="#FFF" />} />
        </div>
    );
};
