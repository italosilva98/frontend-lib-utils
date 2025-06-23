# 🚀 frontend-utils

> Biblioteca Angular com utilitários, diretivas, componentes e serviços reutilizáveis para padronizar e acelerar o desenvolvimento front-end na empresa.

## 📦 Instalação

```bash
npm install frontend-utils
```

Ou, se estiver em monorepo Angular:

```bash
ng add frontend-utils
```

## 🔧 Importação do Módulo

No `AppModule` ou no módulo do seu projeto:

```ts
import { FrontendUtilsModule } from 'frontend-utils';

@NgModule({
  imports: [FrontendUtilsModule],
})
export class AppModule {}
```

---

## 🧰 Funcionalidades Disponíveis

### ✅ Diretivas

| Diretiva              | Descrição                                      | Exemplo de uso                              |
|-----------------------|-----------------------------------------------|---------------------------------------------|
| `utilsTrackClick`     | Tagueamento de clique para GA4 ou Datadog     | `<button utilsTrackClick="botao-comprar">`  |

---

### 🧪 Pipes

| Pipe           | Descrição                            | Exemplo                         |
|----------------|---------------------------------------|----------------------------------|
| `truncateText` | Limita texto com reticências (...)    | `{{ texto | truncateText: 30 }}` |

---

### 📦 Services

- **LoggerService**
  - Envia logs para console, Datadog ou outro sistema
- **ToastService** *(requer Angular Material)*
  - Exibe notificações: `toast.success('Mensagem')`
- **LoadingService**
  - Controla spinner global
- **TranslationService**
  - Traduções simples: `translation.translate('greeting')`

---

### 🔁 Interceptors

| Interceptor          | Descrição                                           |
|----------------------|------------------------------------------------------|
| `LoadingInterceptor` | Ativa spinner automaticamente em requisições HTTP   |

---

### 🔐 Guards

| Guard       | Descrição                             |
|-------------|----------------------------------------|
| `AuthGuard` | Protege rotas com base em token local  |

---

### 🌀 Componentes

| Componente               | Descrição                         |
|--------------------------|------------------------------------|
| `utils-loading-spinner` | Overlay de carregamento global     |

Exemplo de uso:

```html
<utils-loading-spinner></utils-loading-spinner>
```

---

## 🎨 Estilos Globais (opcional)

Adicione ao seu `styles.scss`:

```scss
.toast-success {
  background-color: #4caf50 !important;
  color: white;
}

.toast-error {
  background-color: #f44336 !important;
  color: white;
}

.toast-info {
  background-color: #2196f3 !important;
  color: white;
}
```

---

## 📌 Roadmap (ideias futuras)

- [ ] Integração com GA4 completa
- [ ] Componentes com Theme customizável
- [ ] Schematics (`ng generate page --with-tracker`)
- [ ] Integração com Storybook
- [ ] FormUtils e Validators customizados

---

## 👨‍💻 Contribuindo

Sinta-se livre para sugerir melhorias, criar novos utilitários e evoluir esse pacote junto com a guilda de front-end. 💡

---

## 🧠 Manutenção

Mantido por: **@seu-usuario**  
Time de Front-end da Empresa 🚀
