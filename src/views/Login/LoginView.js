export default function LoginView({form, onInputChanged, onSubmit, requestStatus}) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Iniciar sesión</h3>
        <div>
          <label>Email</label>
          <input type="text" name="email" id="email" value={form.email} onChange={onInputChanged} />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={onInputChanged}
          />
        </div>
        <button type="submit" disabled={requestStatus.isLoading}>
          {requestStatus.isLoading ? 'Enviando' : 'Enviar'}
        </button>
        {requestStatus.hasFailed && (
          <div>
            <div>Las credenciales no son válidas</div>
          </div>
        )}
      </form>
    </div>
  );
}
