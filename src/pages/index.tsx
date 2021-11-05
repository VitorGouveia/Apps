import { Category } from "@prisma/client"
import { GetServerSideProps } from "next"
import { FC } from "react"

type HomeProps = {
  message: string
  categories: Category[]
}

const Home: FC<HomeProps> = ({ message, categories }) => {
  console.log(message)

  return (
    <div>
      {JSON.stringify(categories, null, 2)}
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const __isProd__ = process.env.NODE_ENV

  let url = 'http://localhost:3000/api/category'

  if(__isProd__) {
    url = `http://localhost:3000/api/category`
  }

  const response = await fetch(url)
  const data = await response.json()

  return {
    props: data
  }
}