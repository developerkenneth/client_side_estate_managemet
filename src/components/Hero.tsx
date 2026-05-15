const defaultImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuByPswS01vYnn2mEJvqaoPkEiq1OwwGxS-IWi25MRJeLbkOtGQ9YHw7xN1ZLYbL3EPB5J8jHmd5CoOH5-404xb9hVfLLcAGjBmfihDAR9kkgG-jt2589Iz8qrBeZ7FN6OoVfkdahWp_dy4Zd3ty3Z1khyfvOvDpm71rbtO55OBfzVgQLa0xOZXNAfsnlgMbYWls2KT9grUPgkgFlKvMooZGBv0NfEeiPxiwLcmIsJg2k_R9SM5Etng3hmP0zs7fKuAKVooBhj2dZWNa",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA8MttV10U48ESJFlhzl7ScDwVxAYB9ox0qGxxpsGusld3cWMuTTIBR4x6EjgVjubjjaqJYhN21aADIZkN7p3Ux1297pxx5WZWvaCmHYrpHU85OA46KybswfO9bh6tKDmEmz7ZLIL7rfJXZrysuFE1mv6vLXorJjaWXCWrTINRe-dEVI_6e_35hA1UMQG_YhMJd60bw2Gg181pgMSH9eQUCdSTN0-Mn4ybh1NMliblnY5xMs2Bsm2I2QUBDvrWL0bKWlLptaPpqV7OK",

  "https://lh3.googleusercontent.com/aida-public/AB6AXuA6SMsLc6ARICW2P9ewnvFutM5RHrl9k7b6wPpqYZ5kJ00nQ4bdC-wfs0FAxYHrC3RueA3Opn21j0Cx6-rOsWbWMXhJKnlEyvnoZHMunU3HwFFC3cz_8NYS4WM8z00Qria0ERONZAhlE5u_bPLMoGDU9u-56SV9iZY6j_UKGCGfaxTM-4vh4PKp8kzeEU_hAcEjF1BW0i28N3WmZIh4MjG-CJcSwhMAI9upYxGC-U2nqjd9Q9G8XN4-13IEqE6L5sGFFwiaDeVFiW8X",
];
export default function Hero({
  images = defaultImages,
  description = "hero image description",
}) {

    const newImages = images.length < 1 ? defaultImages : images;

  return (
    <>
      <section className="relative h-[60vh] w-full bg-primary-dark overflow-hidden">
        <div className="absolute inset-0">
          {/* 
             Note: Since your defaultImages is an array of OBJECTS, 
             the map works perfectly using image.src and image.alt 
          */}
          {newImages &&
            newImages.map((image, index) => (
              <img
                key={index}
                alt={`${description} ${index + 1}`}
                className="gallery-img absolute inset-0 w-full h-full object-cover"
                src={image}
              />
            ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent"></div>
      </section>
    </>
  );
}
