'use client';

import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';

export default function SocialIcons() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center space-x-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
          <Image
            src="/wechat.svg"
            alt="WeChat"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
        <span className="mt-2 text-sm text-gray-600">{t('wechat')}</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
          <Image
            src="/xiaohongshu.svg"
            alt="RedNote"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
        <span className="mt-2 text-sm text-gray-600">{t('xiaohongshu')}</span>
      </div>
    </div>
  );
} 