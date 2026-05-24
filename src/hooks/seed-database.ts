import { db } from "@/lib/db";
import { main as seedDatabase } from "@/lib/seed";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { useEffect, useReducer } from "react";

let seedStarted = false;

type State = {
  loading: boolean;
  error: Error | null;
};

type Action =
  | { type: "SEED_START" }
  | { type: "SEED_END" }
  | { type: "SEED_ERROR"; payload: Error };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SEED_START":
      return { ...state, loading: true, error: null };
    case "SEED_END":
      return { ...state, loading: false, error: null };
    case "SEED_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function useSeedDatabase() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: null,
  });
  const { data } = useLiveQuery(db.query.dishes.findFirst());

  useEffect(() => {
    if (data) {
      return;
    }

    dispatch({ type: "SEED_START" });
    seedStarted = true;

    seedDatabase()
      .then(() => {
        dispatch({ type: "SEED_END" });
      })
      .catch((err) => {
        console.log({ seedError: err, err: true });
        dispatch({
          type: "SEED_ERROR",
          payload: new Error("Failed Seeding database!"),
        });
      });
  }, [data]);

  return state;
}
