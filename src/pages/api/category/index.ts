// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
/*  */
import { client } from "../../../prisma"

type Method = "POST" | "PUT" | "GET" | "DELETE"

type CreateProps = {
  title: string
  
  subcategory?: {
    title: string
  } 
}

const create = async ({ title, subcategory }: CreateProps) => {
  return await client.category.create({
    data: {
      title,
      ...subcategory
    },
    
    include: {
      item: true,
      subcategory: true
    }
  })
}

const get = async () => {
  return await client.category.findMany({
    include: {
      item: true,
      subcategory: {
        include: {
          item: true
        }
      }
    }
  })
}

const handler: NextApiHandler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request

  /* types all the available methods */
  const methods = method as Method

  switch (methods) {
    case "GET":
      const categories = await get()

      return response.json({
        message: "These are all the categories, sir.",
        categories
      })
      
    case "POST":
      const category = await create(request.body)

      return response.json({
        message: 
        `Your category ${category.title} 
        
        ${!!category.subcategory
          ? `and subcategory ${request.body.subcategory.title} were created`
          : "was created"
        }`
      })
  }
}

export default handler