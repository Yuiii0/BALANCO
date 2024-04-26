export type SocketResponse<D = null> =
  | { ok: true; data?: D }
  | {
      ok: false;
      error: string;
    };
