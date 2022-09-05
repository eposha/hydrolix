import { useRouter } from 'next/router';

import en from 'locales/en';

const translationsLocales = {
  en,
};

const useLocales = () => {
  const router = useRouter();
  const { locale } = router;

  return translationsLocales[locale as keyof typeof translationsLocales] ?? en;
};

export default useLocales;
