export default function BookAddView({form, onInputChanged, onSubmit, requestStatus}) {
  return (
    <div>
      <h1>Crear libro</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Título</label>
          <input type="text" name="title" id="title" value={form.title} onChange={onInputChanged} />
        </div>
        <button type="submit" disabled={requestStatus.isLoading}>
          {requestStatus.isLoading ? 'Enviando' : 'Enviar'}
        </button>
        {requestStatus.isError && (
          <div>
            <div>Error creando libro</div>
          </div>
        )}
        {requestStatus.isSuccess && (
          <div>
            <div>Libro añadido correctamente</div>
          </div>
        )}
      </form>
    </div>
  );
}
