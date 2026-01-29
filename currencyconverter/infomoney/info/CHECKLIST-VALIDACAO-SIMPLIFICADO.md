# ✅ CHECKLIST DE VALIDAÇÃO - VERSÃO SIMPLIFICADA

## 🎯 Validação Rápida do Bloco

### ✅ 1. FUNCIONALIDADES CORE

#### Conversão
- [ ] Digitar valor no FROM → TO atualiza automaticamente
- [ ] Trocar moeda FROM → Recalcula TO
- [ ] Trocar moeda TO → Recalcula FROM
- [ ] Rate calculado corretamente

#### Botão Swap
- [ ] Ícone exibido (círculo azul com setas)
- [ ] Clicar no botão → Troca moedas
- [ ] Clicar no botão → Troca valores
- [ ] Valores mantidos após swap

#### Dropdown de Moedas
- [ ] Flag exibida
- [ ] Código da moeda exibido (USD, BRL, etc)
- [ ] Chevron exibido
- [ ] Clicar abre lista
- [ ] Lista mostra todas as moedas
- [ ] Selecionar moeda → Dropdown fecha
- [ ] Moeda selecionada atualiza

#### Formatação
- [ ] Números formatados com vírgula (pt-BR)
- [ ] Separador de milhares (ponto)
- [ ] Decimais corretos (2 para maioria, 0 para JPY)

---

### 🎨 2. ESTILIZAÇÃO

#### Fontes
- [ ] Fonte Inter aplicada (não Arial/Helvetica)
- [ ] Textos com fonte correta

#### Cores
- [ ] Cores `wl-neutral-*` aplicadas
- [ ] Textos com cor correta (wl-neutral-600)
- [ ] Bordas com cor correta (wl-neutral-600)
- [ ] Background branco

#### Layout
- [ ] Container com borda e sombra
- [ ] Inputs com borda arredondada (rounded-xl)
- [ ] Espaçamentos corretos (gap, padding)
- [ ] Layout mobile (vertical)
- [ ] Layout web (horizontal)

#### Elementos Visuais
- [ ] Botão swap com ícone azul
- [ ] Hover nos inputs (borda preta)
- [ ] Focus nos inputs (borda preta)
- [ ] Dropdown posicionado corretamente

---

### 🔧 3. CÓDIGO (Verificação Técnica)

#### Performance
- [ ] `useMemo` implementado para displayFrom/displayTo
- [ ] Sem re-renders desnecessários

#### Limpeza
- [ ] Sem logs de debug (127.0.0.1:7242)
- [ ] Sem console.log desnecessários
- [ ] Código limpo

#### Estrutura
- [ ] Todos os arquivos presentes
- [ ] CSS files completos
- [ ] Componentes importados corretamente

---

### 🔌 4. INTEGRAÇÃO WORDPRESS

#### Frontend (view.tsx)
- [ ] Conversão automática funciona
- [ ] Callbacks funcionais
- [ ] Estado gerenciado corretamente

#### Editor (index.tsx)
- [ ] Componente renderiza no editor
- [ ] Atributos gerenciados corretamente

#### PHP
- [ ] Assets enfileirados
- [ ] CSS carregado
- [ ] JavaScript carregado como módulo ES6

---

## 🚨 PROBLEMAS COMUNS E SOLUÇÕES

### ❌ Conversão não funciona
**Causa**: Callbacks vazios no view.tsx
**Solução**: Verificar se `onFromValueChange` calcula `toValue`

### ❌ Botão swap não funciona
**Causa**: `onSwap` não implementado
**Solução**: Verificar se `handleSwap` troca moedas e valores

### ❌ Estilos não aplicados
**Causa**: CSS não carregado ou classes Tailwind não compiladas
**Solução**: Verificar se `style.css` foi gerado e carregado

### ❌ Fonte errada
**Causa**: Fonte Inter não importada
**Solução**: Verificar se `@import url('https://fonts.googleapis.com/...')` está no CSS

### ❌ Dropdown não abre
**Causa**: Portal não renderizado ou CSS faltando
**Solução**: Verificar se `createPortal` está funcionando

---

## ✅ COMANDOS RÁPIDOS DE VALIDAÇÃO

```bash
# 1. Verificar useMemo
grep -n "useMemo" infomoney/design-system/src/componentes/currency-converter/CurrencyConverter.tsx

# 2. Verificar logs de debug
grep -r "127.0.0.1:7242" infomoney/design-system/src/

# 3. Verificar CSS
ls -la infomoney/design-system/src/componentes/currency-converter/*.css

# 4. Executar validação completa
./infomoney/VALIDACAO-PRE-BUILD.sh
```

---

## 🎯 CHECKLIST FINAL

Antes de considerar o bloco correto:

- [ ] ✅ Conversão funciona
- [ ] ✅ Botão swap funciona
- [ ] ✅ Dropdown funciona
- [ ] ✅ Formatação correta
- [ ] ✅ Estilos aplicados
- [ ] ✅ Fontes corretas
- [ ] ✅ Layout responsivo
- [ ] ✅ useMemo implementado
- [ ] ✅ Sem logs de debug
- [ ] ✅ WordPress integration completa

**Se todos os itens estão ✅, o bloco está correto!** 🎉
