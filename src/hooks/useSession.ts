import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const SESSION_KEY = 'clean_shopper_session_id';

export function useSession() {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    async function initSession() {
      let id = localStorage.getItem(SESSION_KEY);

      if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem(SESSION_KEY, id);

        await supabase.from('sessions').insert({ id });
      } else {
        await supabase
          .from('sessions')
          .update({ last_active: new Date().toISOString() })
          .eq('id', id);
      }

      setSessionId(id);
    }

    initSession();
  }, []);

  return sessionId;
}
