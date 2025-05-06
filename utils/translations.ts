import fs from 'fs';
import path from 'path';

type Language = 'en' | 'de';

type TranslationsMap = {
  [key in Language]: {
    [key: string]: string;
  };
};

export const loadTranslations = (): TranslationsMap => {
  try {
    const filePath = path.join(process.cwd(), 'translations/translations.csv');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    const lines = fileContent.split('\n');
    if (lines.length < 2) {
      console.warn('Translations file is empty or has no content');
      return { en: {}, de: {} };
    }
    
    const headers = lines[0].split(',');
    if (headers.length < 3) {
      console.warn('Translations file has invalid format');
      return { en: {}, de: {} };
    }
    
    const translations: TranslationsMap = {
      en: {},
      de: {}
    };
    
    // Skip the header row (index 0)
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue; // Skip empty lines
      
      // Handle CSV parsing with quoted fields that might contain commas
      const values: string[] = [];
      let line = lines[i];
      let insideQuotes = false;
      let currentValue = '';
      
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        
        if (char === '"') {
          insideQuotes = !insideQuotes;
        } else if (char === ',' && !insideQuotes) {
          values.push(currentValue);
          currentValue = '';
        } else {
          currentValue += char;
        }
      }
      
      // Add the last value
      values.push(currentValue);
      
      // Get the key and values for each language
      const key = values[0]?.trim();
      if (!key) continue; // Skip entries without a key
      
      // Safely handle potentially null or undefined values
      const enValue = values[1] ? values[1].replace(/^"(.*)"$/, '$1').trim() : '';
      const deValue = values[2] ? values[2].replace(/^"(.*)"$/, '$1').trim() : '';
      
      translations.en[key] = enValue;
      translations.de[key] = deValue;
    }
    
    return translations;
  } catch (error) {
    console.error('Error loading translations:', error);
    return { en: {}, de: {} };
  }
};

export const translate = (translations: TranslationsMap, language: Language, key: string): string => {
  if (!key) return ''; // Handle null or undefined keys
  if (!translations || !translations[language]) return key; // Handle missing translations
  return translations[language][key] || key;
}; 