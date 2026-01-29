# 🔧 CORREÇÃO: Posicionamento do Dropdown

## 🐛 Problema Identificado

**Sintoma**: O dropdown (listbox) se separa do componente quando é acionado.

**Causa**: O cálculo de posição estava incorreto:
- Usava `right` em vez de `left`
- Cálculo de posição simplificado demais
- Não calculava largura dinamicamente
- Offset incorreto (+20px desnecessário)

---

## ✅ Correções Aplicadas

### 1. **Estado de Posição**
**Antes**:
```typescript
const [position, setPosition] = useState({ top: 0, right: 0 });
```

**Depois**:
```typescript
const [position, setPosition] = useState({ top: 0, left: 0 });
const [listboxWidth, setListboxWidth] = useState<number | null>(null);
```

### 2. **Cálculo de Posição Inicial**
**Antes**:
```typescript
setPosition({
  top: rect.bottom + window.scrollY + 4,
  right: window.innerWidth - rect.right + window.scrollX,
});
```

**Depois**:
```typescript
const minListboxWidth = 120;
const widthToUse = listboxWidth || minListboxWidth;
const calculatedLeft = rect.right + window.scrollX - widthToUse;
setPosition({
  top: rect.bottom + window.scrollY + 4,
  left: calculatedLeft,
});
```

### 3. **Cálculo Dinâmico de Largura**
**Adicionado**: Novo `useEffect` que:
1. Mede o conteúdo interno do listbox
2. Calcula largura mínima (120px)
3. Recalcula posição com largura correta
4. Alinha à direita do trigger

```typescript
useEffect(() => {
  if (isOpen && listboxInnerRef.current && rootRef.current) {
    const innerRect = listboxInnerRef.current.getBoundingClientRect();
    const calculatedWidth = Math.max(innerRect.width, 120);
    setListboxWidth(calculatedWidth);
    
    const triggerRect = rootRef.current.getBoundingClientRect();
    const calculatedLeft = triggerRect.right + window.scrollX - calculatedWidth;
    setPosition(prev => ({
      ...prev,
      left: calculatedLeft,
    }));
  }
}, [isOpen, sortedCurrencies]);
```

### 4. **Estrutura do Listbox**
**Antes**:
```typescript
<div className="fixed ..." style={{ top, right, ... }}>
  {sortedCurrencies.map(...)}
</div>
```

**Depois**:
```typescript
<div className="fixed ..." style={{ top, left, width, ... }}>
  <div ref={listboxInnerRef} className="py-1">
    {sortedCurrencies.map(...)}
  </div>
</div>
```

**Mudanças**:
- Adicionado `listboxInnerRef` para medir conteúdo
- Usa `left` em vez de `right`
- Largura dinâmica baseada no conteúdo
- Estrutura interna para medição precisa

---

## 📊 Lógica de Posicionamento

### Fórmula de Cálculo
```
left = trigger.right + window.scrollX - listboxWidth
top = trigger.bottom + window.scrollY + 4
```

### Passos
1. **Primeiro cálculo** (quando abre):
   - Usa largura mínima (120px)
   - Calcula posição inicial

2. **Segundo cálculo** (após renderizar conteúdo):
   - Mede largura real do conteúdo
   - Recalcula posição com largura correta
   - Alinha perfeitamente à direita do trigger

---

## ✅ Resultado

### Antes ❌
- Dropdown se separava do componente
- Posição incorreta
- Alinhamento quebrado

### Depois ✅
- Dropdown alinhado corretamente
- Posição calculada dinamicamente
- Alinhado à direita do trigger
- Largura ajustada ao conteúdo

---

## 🧪 Como Testar

1. **Limpar cache do navegador** (Ctrl+Shift+R)
2. **Abrir página com o componente**
3. **Clicar no dropdown de moeda**
4. **Verificar**:
   - ✅ Dropdown aparece abaixo do trigger
   - ✅ Alinhado à direita do trigger
   - ✅ Não se separa do componente
   - ✅ Largura adequada ao conteúdo
   - ✅ Fecha ao clicar fora

---

## 📝 Arquivos Modificados

- ✅ `infomoney/design-system/src/componentes/currency-converter/input-currency-dropdown/InputcurrencyDropdown.tsx`

## 🔄 Build Realizado

- ✅ Design System buildado
- ✅ Arquivos copiados
- ✅ WordPress reiniciado

**Correção aplicada e pronta para teste!** 🎉
