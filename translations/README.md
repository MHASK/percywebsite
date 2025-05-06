# Percy Translations Management

This directory contains the translation files for the Percy product tour website. Translations are managed using CSV files for easy editing and maintenance.

## Structure

- `translations.csv`: The main CSV file containing all translations for the website
- Format: `key,en,de` (translation key, English translation, German translation)

## How to Edit Translations

### 1. Using a Spreadsheet Editor (Recommended)

1. Open the `translations.csv` file with a spreadsheet program like Microsoft Excel, Google Sheets, or LibreOffice Calc
2. Edit the translations in the appropriate columns:
   - Column A: Translation key (do not modify)
   - Column B: English translation
   - Column C: German translation
3. Save the file as CSV format

### 2. Using a Text Editor

If you prefer editing directly in a text editor:

1. Open `translations.csv` in your preferred text editor
2. Each line represents a translation entry in the format: `key,english_translation,german_translation`
3. Be careful with comma characters within translations - they must be enclosed in double quotes
4. Example: `hero.headline,This is a headline with a, comma,"Dies ist eine Überschrift mit einem, Komma"`

## Adding New Translations

To add a new translation:

1. Add a new row to the CSV file
2. Follow the format: `key,en,de`
3. Choose a descriptive key following the existing naming pattern (section.element)
4. Add translations for all supported languages
5. Save the file

## Important Notes

- Always maintain proper CSV format with consistent columns
- Use double quotes around text that contains commas
- Keep keys consistent across the application
- The application loads translations dynamically via the `/api/translations` endpoint
- Changes to the CSV file take effect after the application is restarted or redeployed

## Usage in Code

Translations are used in components via the `useLanguage` hook:

```tsx
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t('section.title')}</h1>
      <p>{t('section.description')}</p>
    </div>
  );
}
``` 