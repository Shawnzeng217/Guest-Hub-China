export type Language = 'en' | 'zh' | 'ja' | 'ko' | 'th' | 'vi' | 'fr' | 'de' | 'es';

export interface Translations {
  welcomePrefix: string;
  welcomeName: string;
  cards: {
    translator: { title: string; desc: string };
    snapAndEat: { title: string; desc: string };
    concierge: { title: string; desc: string };
    fitness: { title: string; desc: string };
    comingSoon: { title: string; desc: string };
  };
  promo: {
    subtitle: string;
    title: string;
    cta: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    welcomePrefix: "Welcome to your",
    welcomeName: "Hilton Guest Hub",
    cards: {
      translator: { title: "AI Translator", desc: "Real-time translation" },
      snapAndEat: { title: "Snap & Eat", desc: "Identify food instantly" },
      concierge: { title: "Digital Concierge", desc: "Digital in-stay journey" },
      fitness: { title: "Magic Mirror", desc: "Smart fitness coach" },
      comingSoon: { title: "Coming Soon", desc: "More tools arriving..." }
    },
    promo: {
      subtitle: "Exclusive Offer",
      title: "Dining Rewards",
      cta: "Learn more"
    }
  },
  zh: {
    welcomePrefix: "欢迎来到您的",
    welcomeName: "希尔顿宾客中心",
    cards: {
      translator: { title: "AI 翻译官", desc: "实时语音翻译" },
      snapAndEat: { title: "拍照识食", desc: "即时识别美食" },
      concierge: { title: "数字礼宾", desc: "数字化入住体验" },
      fitness: { title: "魔镜教练", desc: "智能健身教练" },
      comingSoon: { title: "敬请期待", desc: "更多工具即将推出..." }
    },
    promo: {
      subtitle: "专属优惠",
      title: "餐饮奖励",
      cta: "了解更多"
    }
  },
  ja: {
    welcomePrefix: "ようこそ",
    welcomeName: "ヒルトン・ゲストハブへ",
    cards: {
      translator: { title: "AI翻訳", desc: "リアルタイム翻訳" },
      snapAndEat: { title: "スナップ＆イート", desc: "瞬時に料理を識別" },
      concierge: { title: "デジタルコンシェルジュ", desc: "滞在中のデジタル体験" },
      fitness: { title: "マジックミラー", desc: "スマートフィットネスコーチ" },
      comingSoon: { title: "近日公開", desc: "新しいツールが登場します..." }
    },
    promo: {
      subtitle: "限定オファー",
      title: "ダイニング特典",
      cta: "詳細を見る"
    }
  },
  ko: {
    welcomePrefix: "환영합니다",
    welcomeName: "힐튼 게스트 허브",
    cards: {
      translator: { title: "AI 번역기", desc: "실시간 번역" },
      snapAndEat: { title: "스냅 & 이트", desc: "즉석에서 음식 식별" },
      concierge: { title: "디지털 컨시어지", desc: "디지털 투숙 경험" },
      fitness: { title: "매직 미러", desc: "스마트 피트니스 코치" },
      comingSoon: { title: "준비 중", desc: "더 많은 기능이 추가됩니다..." }
    },
    promo: {
      subtitle: "단독 혜택",
      title: "다이닝 리워드",
      cta: "자세히 보기"
    }
  },
  th: {
    welcomePrefix: "ยินดีต้อนรับสู่",
    welcomeName: "ฮิลตัน เกสต์ ฮับ",
    cards: {
      translator: { title: "AI แปลภาษา", desc: "แปลภาษาแบบเรียลไทม์" },
      snapAndEat: { title: "ถ่ายรูป & ทาน", desc: "ระบุอาหารได้ทันที" },
      concierge: { title: "คอนเซียร์จดิจิทัล", desc: "ประสบการณ์ดิจิทัลระหว่างเข้าพัก" },
      fitness: { title: "กระจกวิเศษ", desc: "โค้ชฟิตเนสอัจฉริยะ" },
      comingSoon: { title: "เร็วๆ นี้", desc: "เครื่องมืออื่นๆ กำลังมา..." }
    },
    promo: {
      subtitle: "ข้อเสนอสุดพิเศษ",
      title: "รางวัลการรับประทานอาหาร",
      cta: "ดูรายละเอียด"
    }
  },
  vi: {
    welcomePrefix: "Chào mừng bạn đến với",
    welcomeName: "Trung tâm Khách hàng Hilton",
    cards: {
      translator: { title: "Thông dịch viên AI", desc: "Dịch thuật thời gian thực" },
      snapAndEat: { title: "Chụp & Ăn", desc: "Nhận dạng món ăn ngay lập tức" },
      concierge: { title: "Trợ lý số", desc: "Hành trình lưu trú kỹ thuật số" },
      fitness: { title: "Gương thần", desc: "Huấn luyện viên thể hình thông minh" },
      comingSoon: { title: "Sắp ra mắt", desc: "Nhiều công cụ khác sắp xuất hiện..." }
    },
    promo: {
      subtitle: "Ưu đãi độc quyền",
      title: "Phần thưởng ẩm thực",
      cta: "Tìm hiểu thêm"
    }
  },
  fr: {
    welcomePrefix: "Bienvenue sur votre",
    welcomeName: "Hilton Guest Hub",
    cards: {
      translator: { title: "Traducteur AI", desc: "Traduction en temps réel" },
      snapAndEat: { title: "Photo & Déguste", desc: "Identifiez les plats instantanément" },
      concierge: { title: "Conciergerie Digitale", desc: "Parcours numérique du séjour" },
      fitness: { title: "Miroir Magique", desc: "Coach fitness intelligent" },
      comingSoon: { title: "Bientôt disponible", desc: "D'autres outils arrivent..." }
    },
    promo: {
      subtitle: "Offre Exclusive",
      title: "Récompenses Restauration",
      cta: "En savoir plus"
    }
  },
  de: {
    welcomePrefix: "Willkommen in Ihrem",
    welcomeName: "Hilton Guest Hub",
    cards: {
      translator: { title: "KI-Übersetzer", desc: "Echtzeit-Übersetzung" },
      snapAndEat: { title: "Snap & Eat", desc: "Essen sofort identifizieren" },
      concierge: { title: "Digitaler Concierge", desc: "Digitaler Aufenthalt" },
      fitness: { title: "Zauberspiegel", desc: "Smarter Fitness-Coach" },
      comingSoon: { title: "Demnächst", desc: "Weitere Tools folgen..." }
    },
    promo: {
      subtitle: "Exklusives Angebot",
      title: "Dining Prämien",
      cta: "Mehr erfahren"
    }
  },
  es: {
    welcomePrefix: "Bienvenido a su",
    welcomeName: "Hilton Guest Hub",
    cards: {
      translator: { title: "Traductor AI", desc: "Traducción en tiempo real" },
      snapAndEat: { title: "Captura y Come", desc: "Identifica comida al instante" },
      concierge: { title: "Conserjería Digital", desc: "Experiencia digital en la estancia" },
      fitness: { title: "Espejo Mágico", desc: "Coach de fitness inteligente" },
      comingSoon: { title: "Próximamente", desc: "Más herramientas en camino..." }
    },
    promo: {
      subtitle: "Oferta Exclusiva",
      title: "Premios Gastronómicos",
      cta: "Más información"
    }
  }
};
