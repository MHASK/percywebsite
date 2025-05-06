import { NextResponse } from 'next/server';
import { loadTranslations } from '@/utils/translations';

export async function GET() {
  try {
    const translations = loadTranslations();
    return NextResponse.json(translations);
  } catch (error) {
    console.error('Error loading translations:', error);
    return NextResponse.json(
      { error: 'Failed to load translations' },
      { status: 500 }
    );
  }
} 