export default function ContentCentered({title, text, image, imageAlt}) {
    return(
        <div className="Content-Centered" style={{
            BackgroundImage: `url(${image})`
        }}>
            <title>{title}</title>
            <text>{text}</text>
        </div>
    )
}