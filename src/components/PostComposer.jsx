import { useState, useEffect, useRef } from "react";

const MAX_CHARS = 280;

// nama "laci" penyimpanan di localStorage
const DRAFT_KEY = "threadly-draft";

function PostComposer({ currentUser, onNewPost }) {
  // useState:
  // Ambil draft yang sebelumnya tersimpan di localStorage.
  // Kalau belum ada draft, gunakan string kosong.
  const [content, setContent] = useState(() => {
    return localStorage.getItem(DRAFT_KEY) || "";
  });

  // useRef:
  // Pointer ke elemen textarea
  const textareaRef = useRef(null);

  const isOver = content.length > MAX_CHARS;

  // useEffect #1:
  // Setelah component pertama kali muncul,
  // langsung fokus ke textarea.
  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  // useEffect #2:
  // Setiap content berubah, simpan draft ke localStorage.
  useEffect(() => {
    localStorage.setItem(DRAFT_KEY, content);
  }, [content]);

  function handlePost() {
    const trimmed = content.trim();

    if (!trimmed || trimmed.length > MAX_CHARS) return;

    onNewPost(trimmed);

    setContent("");

    // Draft sudah dijadikan post → hapus dari localStorage
    localStorage.removeItem(DRAFT_KEY);
  }

  return (
    <section className="post-composer">
      <div className="composer-user">
        <div className="avatar">
          {currentUser.displayName.charAt(0)}
        </div>

        <span>What's happening?</span>
      </div>

      <textarea
        ref={textareaRef}
        placeholder="Share your thoughts..."
        rows="3"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="composer-footer">
        <span
          className={`character-count ${isOver ? "over-limit" : ""}`}
        >
          {content.length} / {MAX_CHARS}
        </span>

        <button
          className="primary-button"
          onClick={handlePost}
          disabled={!content.trim() || isOver}
        >
          Post
        </button>
      </div>
    </section>
  );
}

export default PostComposer;