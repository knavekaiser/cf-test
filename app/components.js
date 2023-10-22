"use client";

export const Button = () => {
  return (
    <button
      onClick={() => {
        fetch("/api/users")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }}
    >
      Click Me
    </button>
  );
};
