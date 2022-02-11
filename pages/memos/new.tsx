import * as React from 'react'
import { useRouter } from 'next/router'

import axios from 'axios'

const Login: React.VFC = () => {
  const router = useRouter()

  const createMemo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const title: String = event.currentTarget.memoTitle.value
    const text: String = event.currentTarget.text.value

    axios.post('/api/memo', {
      title,
      text
    }).then((res) => {
      router.replace('/memos')
    }).catch((err) => {
      // 通信に失敗した時、もしくは保存に失敗した時の処理
    })
  }

  return (
    <div className="vh-100 d-flex align-items-center">
      <div className="mx-auto" style={{ minWidth: 800 }}>
        <div className="card bg-light p-5">
          <p className="fs-3 text-center mb-4">メモ作成</p>

          <form onSubmit={createMemo}>
            <div className="mb-4">
              <label htmlFor="titleInput" className="form-label">タイトル</label>
              <input className="form-control" id="titleInput" name="memoTitle" autoComplete="off" required></input>
            </div>

            <div className="mb-4">
              <label htmlFor="textInput" className="form-label">内容</label>
              <input className="form-control" id="textInput" name="text" autoComplete="off" required></input>
            </div>

            <button type='submit' className='btn btn-primary mb-4'>作成</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
