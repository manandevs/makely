import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CreateProfile() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    images: ["", "", "", "", "", ""],
    social: { Instagram: "", Twitter: "" },
    contact: {
      email: "",
      mobile: { code: "+971", number: "" },
      whatsapp: { code: "+971", number: "" },
      location: "",
    },
    exhibitions: [""],
    awards: [""],
  });

  const router = useRouter();

  function handleChange(e, path, index) {
    const value = e.target.value;
    const updated = { ...formData };

    if (path === "images") {
      updated.images[index] = value;
    } else if (path.includes("social")) {
      const key = path.split(".")[1];
      updated.social[key] = value;
    } else if (path.includes("contact")) {
      const [, key, subkey] = path.split(".");
      if (subkey) {
        updated.contact[key][subkey] = value;
      } else {
        updated.contact[key] = value;
      }
    } else if (path === "exhibitions") {
      updated.exhibitions[0] = value;
    } else if (path === "awards") {
      updated.awards[0] = value;
    } else {
      updated[path] = value;
    }

    setFormData(updated);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("artistData", JSON.stringify(formData));
    router.push("/preview-profile");
  }

  const inputClass = "w-full border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all bg-gray-50/50";
  const labelClass = "block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2 ml-1";

  return (
    <div className="min-h-screen bg-[#f3f4f5] pb-20">
      {/* Top Navigation */}
      <nav className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/" className="text-sm font-bold tracking-tighter uppercase border-b-2 border-black">
          Makely
        </Link>
        <Link href="/" className="text-sm text-gray-500 hover:text-black transition">
          Back to Home
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Create Your Portfolio
          </h1>
          <p className="text-lg text-gray-600">
            Tell the world your story. Fill in the details below to launch your gallery.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Section: Basic Identity */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs">01</span>
              Identity
            </h2>
            <div className="space-y-6">
              <div>
                <label className={labelClass}>Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Isabelle Pascual"
                  value={formData.name}
                  onChange={(e) => handleChange(e, "name")}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Artist Bio</label>
                <textarea
                  rows="4"
                  placeholder="Describe your style, inspiration, and journey..."
                  value={formData.bio}
                  onChange={(e) => handleChange(e, "bio")}
                  className={inputClass}
                  required
                />
              </div>
            </div>
          </section>

          {/* Section: Artwork */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs">02</span>
              Media Gallery
            </h2>
            <p className="text-sm text-gray-500 mb-6 -mt-4 ml-10">Paste direct image URLs from Instagram, Google Drive, or your hosting service.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formData.images.map((img, i) => (
                <div key={i}>
                  <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1">Artwork #{i + 1}</label>
                  <input
                    type="text"
                    value={img}
                    placeholder="https://image-url.com/art.jpg"
                    onChange={(e) => handleChange(e, "images", i)}
                    className={inputClass}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Section: Social & Contact */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs">03</span>
              Reach & Socials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Instagram URL</label>
                <input
                  type="url"
                  placeholder="instagram.com/yourname"
                  value={formData.social.Instagram}
                  onChange={(e) => handleChange(e, "social.Instagram")}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Twitter URL</label>
                <input
                  type="url"
                  placeholder="twitter.com/yourname"
                  value={formData.social.Twitter}
                  onChange={(e) => handleChange(e, "social.Twitter")}
                  className={inputClass}
                />
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Contact Email</label>
                <input
                  type="email"
                  placeholder="hello@yourdomain.com"
                  value={formData.contact.email}
                  onChange={(e) => handleChange(e, "contact.email")}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Mobile Number</label>
                <div className="flex space-x-2">
                  <select
                    value={formData.contact.mobile.code}
                    onChange={(e) => handleChange(e, "contact.mobile.code")}
                    className="border border-gray-200 rounded-xl bg-gray-50 p-3 text-sm"
                  >
                    <option>+971</option><option>+49</option><option>+1</option><option>+44</option>
                  </select>
                  <input
                    type="tel"
                    value={formData.contact.mobile.number}
                    onChange={(e) => handleChange(e, "contact.mobile.number")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Based in (Location)</label>
                <input
                  type="text"
                  placeholder="City, Country"
                  value={formData.contact.location}
                  onChange={(e) => handleChange(e, "contact.location")}
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          {/* Section: Credentials */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs">04</span>
              Exhibitions & Awards
            </h2>
            <div className="space-y-6">
              <div>
                <label className={labelClass}>Major Exhibitions</label>
                <input
                  type="text"
                  placeholder="Louvre 2023, Dubai Art Fair..."
                  value={formData.exhibitions[0]}
                  onChange={(e) => handleChange(e, "exhibitions")}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Awards</label>
                <input
                  type="text"
                  placeholder="Artist of the Year 2024..."
                  value={formData.awards[0]}
                  onChange={(e) => handleChange(e, "awards")}
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          <div className="pt-10 flex flex-col items-center">
            <button
              type="submit"
              className="bg-black text-white px-12 py-5 rounded-full text-xl font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20"
            >
              Preview Your Site
            </button>
            <p className="mt-4 text-sm text-gray-400">You can edit these details later.</p>
          </div>
        </form>
      </div>
    </div>
  );
}