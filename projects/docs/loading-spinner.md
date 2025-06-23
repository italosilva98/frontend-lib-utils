# 🌀 LoadingSpinnerComponent

Este componente é usado para exibir um spinner de carregamento em tela cheia enquanto a aplicação está processando alguma operação assíncrona.

---

## ✅ Quando usar?

- Durante chamadas HTTP
- Ao carregar rotas com `lazy loading`
- Enquanto o usuário espera uma operação importante

---

## 💡 Exemplo de uso simples

```html
<!-- app.component.html -->
<utils-loading-spinner></utils-loading-spinner>
```

---

## 🧪 Exemplo com botão e simulação de delay

```html
<!-- Exemplo de template -->
<button (click)="carregarDados()">Carregar Dados</button>
<utils-loading-spinner></utils-loading-spinner>
```

```ts
// app.component.ts
constructor(private loadingService: LoadingService) {}

carregarDados(): void {
  this.loadingService.setLoading(true);
  setTimeout(() => {
    this.loadingService.setLoading(false);
  }, 3000); // Simula operação de 3s
}
```

---

## 🛠️ Integração com requisições HTTP

```ts
// exemplo de serviço
this.loadingService.setLoading(true);

this.http.get('/api/dados').subscribe({
  next: (data) => {
    // processa dados
  },
  complete: () => this.loadingService.setLoading(false),
  error: () => this.loadingService.setLoading(false)
});
```

---

## 📦 Importante

Certifique-se de que o `LoadingService` esteja provido no `AppModule` ou em um `CoreModule`, e que o `LoadingSpinnerComponent` esteja importado e declarado corretamente.

---

## 📚 Referências

- [Documentação oficial do Angular](https://angular.io/guide/observables)
- [Compodoc - Angular Documentation Tool](https://compodoc.app)