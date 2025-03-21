import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaWeixin } from 'react-icons/fa';
import { SiXiaohongshu } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';

const ContactInfo = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-xl" />
        <span>admission@womoffer.com</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-xl" />
        <span>{t('addressText')}</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <FaWeixin className="text-xl" />
          <span>{t('wechat')}</span>
        </div>
        <div className="pl-7 space-y-1 text-sm">
          <p>002_WoM</p>
          <p>wom_tiago</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <SiXiaohongshu className="text-xl" />
          <span>{t('xiaohongshu')}</span>
        </div>
        <div className="pl-7 space-y-1 text-sm">
          <p>wom_tiago</p>
          <p>WoM_旺咪</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 