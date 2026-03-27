import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../services/translations';

interface HeaderProps {
  onBack?: () => void;
  showBack?: boolean;
}

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

const Header: React.FC<HeaderProps> = ({ onBack, showBack = false }) => {
  const { language, setLanguage, t } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const handleLanguageChange = (code: Language, name: string) => {
    if (window.gtag) {
      window.gtag('event', 'language_change', {
        event_category: 'Header',
        event_label: name,
        language_code: code,
        language_name: name
      });
    }
    setLanguage(code);
    setShowLangMenu(false);
  };

  return (
    <div className="bg-hilton-blue w-full rounded-b-2xl shadow-lg relative z-10 transition-all duration-300 min-h-[88px] flex flex-col justify-center">
      {/* Top App Bar - Absolute to not affect centering */}
      <div className="absolute top-0 left-0 w-full flex items-center px-4 pt-4 justify-between z-30">
        {/* Left Action */}
        <button
          onClick={onBack}
          className={`text-white/80 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors ${!showBack ? 'opacity-0 pointer-events-none' : ''}`}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
        </button>

        {/* Right Action: Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="text-white/80 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>language</span>
          </button>

          {showLangMenu && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setShowLangMenu(false)}
              ></div>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden z-50 animate-fadeIn border border-gray-100">
                <div className="py-2 max-h-64 overflow-y-auto no-scrollbar">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code, lang.name)}
                      className={`w-full flex items-center px-4 py-3 text-sm transition-colors hover:bg-gray-50 ${language === lang.code ? 'text-primary font-semibold bg-primary/5' : 'text-gray-700'}`}
                    >
                      <span className="mr-3 text-lg leading-none">{lang.flag}</span>
                      <span>{lang.name}</span>
                      {language === lang.code && (
                        <span className="material-symbols-outlined ml-auto text-sm">check</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Welcome Message - Only show on Home */}
      {!showBack && (
        <div className="px-6 text-center animate-fade-in pt-2">
          <h1 className="font-serif text-2xl font-light leading-tight">
            <span className="text-[#8dc0ce] block">{t.welcomePrefix}</span>
            <span className="text-white font-semibold">{t.welcomeName}</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Header;