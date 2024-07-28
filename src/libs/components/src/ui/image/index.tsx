import Image from "next/image";

interface ImageTypes {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    sizes?: string;
    className?: string;
    priority?: boolean;
}

const ImageComponent: React.FC<ImageTypes> = ({
    src,
    alt,
    width,
    height,
    sizes,
    className,
    priority,
}) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            sizes={sizes}
            height={height}
            priority={priority}
            className={className}
        />
    );
};

export default ImageComponent;
