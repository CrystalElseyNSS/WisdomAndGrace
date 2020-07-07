import React, { useContext, useEffect } from "react";
import Quote from "./Quote";
import { QuoteContext } from "../providers/QuoteProvider";

export default function QuoteList() {
  const { quotes, refreshQuotes } = useContext(QuoteContext);

  useEffect(() => {
    refreshQuotes();
    // eslint-disable-next-line 
  }, []);

  return (
    <section>
      {quotes.map(q =>
        <Quote key={q.id} quote={q}/>
      )}
    </section>
  );
}