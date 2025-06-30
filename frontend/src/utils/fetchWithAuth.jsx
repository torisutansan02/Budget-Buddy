export const fetchWithAuth = async (url, token, options = {}, onUnauthorized) => {
  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 401 && typeof onUnauthorized === 'function') {
    onUnauthorized();
    return null;
  }

  return res.ok ? await res.json() : null;
};
