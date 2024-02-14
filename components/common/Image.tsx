import NextImage, { ImageLoaderProps, ImageProps } from 'next/image'

export function cdnLoader({ src, width }: ImageLoaderProps) {
    return `src=${process.env.NODE_ENV === 'production' ? `https://pftrobot.github.io/pftrobot${src}` : 'ttt'}`
}

const Image = (props: ImageProps) => {
    return <NextImage {...props} loader={cdnLoader} />
}

export default Image
