import { Category } from "@prisma/client"
import { GetServerSideProps } from "next"
import { FC } from "react"
import { client } from "../prisma"

type HomeProps = {
  message: string
  categories: Category[]
}

const Home: FC<HomeProps> = ({ message, categories }) => {
  console.log(message)

  return (
    <pre>
      {JSON.stringify(categories, null, 2)}
    </pre>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  await client.item.create({
    data: {
      title: "Snow Path",
      picture: "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg",

      subcategory: {
        connect: {
          id: 3
        }
      }
    }
  })

  await client.item.create({
    data: {
      title: "Houses Covered in Snow",
      picture: "https://images.pexels.com/photos/45204/alm-friuli-snow-snowfall-45204.jpeg",

      subcategory: {
        connect: {
          id: 3
        }
      }
    }
  })

  await client.item.create({
    data: {
      title: "Aurora Boreale in Snow",
      picture: "https://images.pexels.com/photos/258112/pexels-photo-258112.jpeg",

      subcategory: {
        connect: {
          id: 3
        }
      }
    }
  })

  await client.item.create({
    data: {
      title: "Frozen River",
      picture: "https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg",

      subcategory: {
        connect: {
          id: 3
        }
      }
    }
  })

  await client.item.create({
    data: {
      title: "Snow Flake",
      picture: "https://images.pexels.com/photos/813871/pexels-photo-813871.jpeg",

      subcategory: {
        connect: {
          id: 3
        }
      }
    }
  })

  await client.item.create({
    data: {
      title: "Dark Night in Alaska",
      picture: "https://images.pexels.com/photos/2007139/pexels-photo-2007139.jpeg",

      subcategory: {
        connect: {
          id: 3
        }
      }
    }
  })

  await client.item.create({
    data: {
      title: "Red Bird in Snow",
      picture: "https://images.pexels.com/photos/905248/pexels-photo-905248.jpeg",

      subcategory: {
        connect: {
          id: 3
        }
      }
    }
  })

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