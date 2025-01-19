import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'

function App() {
  return (
    <>
      <div>
        Với thuật toán A*, có thể sử dụng phiên bản Graph-search (tức là có danh sách nút
        đóng) hoặc không. Trong trường hợp không sử dụng nút đóng, tất cả các nút mới sinh ra đều
        được thêm vào tập biên. Trong trường hợp sử dụng phiên bản Graph-search, một nút đã mở
        rộng sẽ không được thêm vào danh sách biên. Nếu một nút đã có một bản sao trong tập biên
        thì bản sao với giá trị hàm f(n) nhỏ hơn sẽ được giữ lại.
      </div>
      <Product />
    </>
  )
}

export default App
