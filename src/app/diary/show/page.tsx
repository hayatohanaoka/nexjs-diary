import { Header } from "../../components/header";
import { Diary } from '../../../domain/diary';

import { createClient } from '@supabase/supabase-js'
import { SupabaseEnv } from "../../../../env";
import React from "react";
import { DiariesTable } from "../../components/diariesTable";

async function fetchDiaries() {
  const supabase = createClient(SupabaseEnv.SUPABASE_ENDPOINT, SupabaseEnv.SUPABASE_TOKEN);
  const {error, data} = await supabase.from("diary").select("*");
  if (error) {
    return "Server error";
  }
  return data;
};


export default async function topPage() {
  return (
    <div>
      <Header />
      <DiariesTable diaries={await fetchDiaries() as Diary[]} />
    </div>
  )
}
