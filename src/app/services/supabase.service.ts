import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://jecpxclnipvxioeepdwt.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplY3B4Y2xuaXB2eGlvZWVwZHd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NDIxNzksImV4cCI6MjA2NTQxODE3OX0.TJnSNvuKT5nPUkLlFgRz6w7KZwoSoCJ7hn6Ot6arUvc'
    );
  }

  async uploadPDF(file: File, filePath: string): Promise<string | null> {
    const { data, error } = await this.supabase.storage
      .from('mangas') // nome do bucket
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      console.error('Erro ao enviar o PDF:', error);
      return null;
    }

    return data?.path || null;
  }

  getPublicURL(path: string): string {
    return this.supabase.storage.from('mangas').getPublicUrl(path).data.publicUrl;
  }
}