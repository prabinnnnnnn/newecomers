import { ContextData } from "@/context/ContextDataProvide";
import { useState, useEffect, useContext, useRef } from "react";

export default function SearchItems({ query }) {
  const data = useContext(ContextData);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const listRef = useRef(null);

  // Filter items where the query matches any part of the title or category
  const filteredItems = data.filter((item) => {
    const lowerCaseQuery = query.toLowerCase();
    return item.title.toLowerCase().startsWith(lowerCaseQuery);
  });

  const handleKeyDown = (e) => {
    if (filteredItems.length === 0) return;

    let newIndex = highlightedIndex;

    if (e.key === "ArrowDown") {
      newIndex = (highlightedIndex + 1) % filteredItems.length; // Move down
    } else if (e.key === "ArrowUp") {
      newIndex =
        highlightedIndex <= 0 ? filteredItems.length - 1 : highlightedIndex - 1; // Move up
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      alert(`Selected: ${filteredItems[highlightedIndex].title}`);
      return;
    }

    setHighlightedIndex(newIndex);

    // Auto-scroll logic
    if (listRef.current) {
      const listHeight = listRef.current.clientHeight;
      const itemHeight = listRef.current.children[newIndex]?.clientHeight || 0;
      const itemOffset = listRef.current.children[newIndex]?.offsetTop || 0;

      if (itemOffset + itemHeight > listHeight) {
        listRef.current.scrollTop = itemOffset + itemHeight - listHeight;
      } else if (itemOffset < listRef.current.scrollTop) {
        listRef.current.scrollTop = itemOffset;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [highlightedIndex, filteredItems]);

  // Function to highlight the matched text
  const highlightText = (text, query) => {
    const lowerCaseText = text.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    const matchIndex = lowerCaseText.indexOf(lowerCaseQuery);

    if (matchIndex === -1) return text; // No match found

    const beforeMatch = text.slice(0, matchIndex);
    const matchText = text.slice(matchIndex, matchIndex + query.length);
    const afterMatch = text.slice(matchIndex + query.length);

    return (
      <>
        {beforeMatch}
        <span className="text-blue-500 font-semibold">{matchText}</span>
        {afterMatch}
      </>
    );
  };

  if (!data || !Array.isArray(data) || query.trim() === "") {
    return null; // Show nothing if query is empty
  }

  return (
    <div
      ref={listRef}
      className="h-1/2 w-1/2 mt-5 rounded-md z-20 bg-slate-200 absolute overflow-y-auto py-2 max-h-[70%]"
    >
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => (
          <div
            key={item.id || index}
            className={`p-5 rounded flex items-center gap-x-7 ${
              index === highlightedIndex
                ? "bg-blue-200/70"
                : "hover:bg-blue-200/70"
            }`}
          >
            <div className="h-8 w-8 bg-black">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-sm">{highlightText(item.title, query)}</span>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500 py-4">No products found.</div>
      )}
    </div>
  );
}
