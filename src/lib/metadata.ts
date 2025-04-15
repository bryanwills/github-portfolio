import { Metadata } from 'next'

// TODO: Update metadata

export function constructMetadata({
  title = 'Bryan Wills', // TODO: Add a custom title
  description = "I am a Systems Engineer and aspiring Software Engineer", // TODO: Add a custom description
  image = '/thumbnail.png', // TODO: Add a custom image
  icons = '/avatar.png', // TODO: Add a custom icon
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@bryan_wills'
    },
    icons,
    metadataBase: new URL('https://www.bryanwills.dev'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
