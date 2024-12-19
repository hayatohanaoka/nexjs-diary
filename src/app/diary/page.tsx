"use client"

import Form from 'next/Form';
import { Header } from "../components/header";
import Link from 'next/link';


export default function topPage() {
  return (
    <div>
      <Header />
      <div>
        <Link href="/diary/show" data-test-id="showLink">閲覧</Link>
      </div>
      <div>
        <Link href="/diary/create" data-test-id="createLink">作成</Link>
      </div>
      <div>
        <Link href="/diary/delete" data-test-id="deleteLink">削除</Link>
      </div>
      <div>
        <Link href="/diary/update" data-test-id="updateLink">編集</Link>
      </div>
    </div>
  )
}
