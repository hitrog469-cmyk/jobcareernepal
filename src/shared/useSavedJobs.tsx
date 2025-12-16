// tiny helper using localStorage
const KEY = "veri_saved_jobs";

function read(): number[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}
function write(list: number[]) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export default function useSavedJobs() {
  return {
    all: read,
    has: (id: number) => read().includes(id),
    save: (id: number) => {
      const s = read();
      if (!s.includes(id)) {
        s.push(id);
        write(s);
      }
    },
    remove: (id: number) => write(read().filter((x) => x !== id)),
    clear: () => write([]),
  };
}
