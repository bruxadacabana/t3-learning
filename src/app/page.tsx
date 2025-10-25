import Link from "next/link";

const mockUrls = ["https://djwpdjtwh8.ufs.sh/f/ZL5oB65u062XTazdHuZDGwLKqZt9xf0lVBEc1AsdFPjTknhi", "https://djwpdjtwh8.ufs.sh/f/ZL5oB65u062XZMABczu062XvhcBzs9GmPR8SNUuxIWOJdTM4", "https://djwpdjtwh8.ufs.sh/f/ZL5oB65u062XoG2Nehwei4up5LKYChHcf9UIFBDdwVlXvSTg", "https://djwpdjtwh8.ufs.sh/f/ZL5oB65u062XTyQ848ZDGwLKqZt9xf0lVBEc1AsdFPjTknhi", "https://djwpdjtwh8.ufs.sh/f/ZL5oB65u062X3oUMtZozvib3xAC0rlgHD9y7G1MWRhBd8csZ"];

const mockImages = mockUrls.map ((url, index) => ({
  id: index+1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className = "flex flex-wrap gap-4">{
        [...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image"/>
          </div>
        ))
      }</div>
      Hello (gallery in progress)
    </main>
  );
}
