import { useState } from "react";

const MoodSearch = ({
  onMoodSearch,
}) => {
  const [mood, setMood] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mood.trim()) return;

    onMoodSearch(mood);

    setMood("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8"
    >
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Describe your mood..."
          value={mood}
          onChange={(e) =>
            setMood(e.target.value)
          }
          className="
            flex-1
            bg-zinc-900
            text-white
            px-5
            py-4
            rounded-xl
            outline-none
            border
            border-zinc-700
            focus:border-purple-500
          "
        />

        <button
          type="submit"
          className="
            bg-purple-600
            hover:bg-purple-700
            text-white
            px-6
            rounded-xl
            transition
          "
        >
          AI Match
        </button>
      </div>
    </form>
  );
};

export default MoodSearch;