export default function BookAddView({
  form,
  isError,
  isLoading,
  isSuccess,
  onInputChanged,
  onSubmit
}) {
  return (
    <div>
      <h1>Crear libro</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Título</label>
          <input type="text" name="title" id="title" value={form.title} onChange={onInputChanged} />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Enviando' : 'Enviar'}
        </button>
        {isError && (
          <div>
            <div>Error creando libro</div>
          </div>
        )}
        {isSuccess && (
          <div>
            <div>Libro añadido correctamente</div>
          </div>
        )}
      </form>
    </div>
  );
}
