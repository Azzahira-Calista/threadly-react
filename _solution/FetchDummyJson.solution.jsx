
import { useEffect, useState } from "react";
import DummyPostCard from "../src/components/DummyPostCard";

function FetchDummyJSON() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/posts") // buka aja linknya di browser, nanti akan muncul data JSON
        .then((response) => response.json())
        .then((data) => {
            console.log('Fetched posts:', data.posts); // ini nampilin datanya di console (klik f12 / inspect di browser, pilih tab console)
            setPosts(data.posts); // simpan data posts ke state
            setLoading(false);
        })
        .catch(() => {
        setError("Gagal mengambil data");
        setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>; // ini muncul kalau data masih diambil dari API, bisa berupa spinner atau teks "Loading..." atau apapun
    }
    if (error) {
        return <div>{error}</div>; // ini muncul kalau ada error saat fetch data
    }

    return (
        <main className="container">
            <section className="feed">
                {/* karena data yang di dummy json ga sesuai sm requirement data yg kita butuhin di threadly ini
                jadi kita bikin dummy aja biar kt tau kalo fetchnya berhasil */}
                {posts.map((post) => (
                <DummyPostCard
                    key={post.id}
                    post={post}
                />
                ))}
            </section>
        </main>
    );
}

export default FetchDummyJSON;