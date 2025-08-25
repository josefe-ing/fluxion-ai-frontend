import { 
  InventoryAlert, 
  ProductRecommendation, 
  ClientIntelligence, 
  KPIData, 
  WarehouseData, 
  DashboardView,
  User,
  ChatMessage,
  ChatSuggestion,
  InventoryFlow,
  ProductInventory,
  Supplier
} from '../types';

export const currentUser: User = {
  name: 'Freddy Da Silva',
  company: 'Maxy Sweet C.A.',
  role: 'Director General',
  avatar: 'FD'
};

export const kpiData: KPIData[] = [
  {
    label: 'Inventario Total',
    value: '$12.3M',
    change: '↑ $1.2M',
    trend: 'up',
    subtitle: 'vs mes anterior'
  },
  {
    label: 'Días de Stock',
    value: '85 días',
    change: '↓ 20 días',
    trend: 'down',
    target: 'Target: 65 días',
    subtitle: 'promedio ponderado'
  },
  {
    label: 'Clientes Activos',
    value: '542/600',
    change: '90% activos',
    trend: 'stable',
    subtitle: 'últimos 30 días'
  },
  {
    label: 'Próximo Contenedor',
    value: '45 días',
    change: 'Decision point',
    trend: 'stable',
    subtitle: 'tiempo recomendado'
  }
];

export const mockAlerts: InventoryAlert[] = [
  {
    id: '1',
    type: 'critical',
    title: 'Stockout Crítico - Savoy Tango',
    message: 'Savoy Tango 20g: 85% probabilidad stockout en 12 días. 15 clientes pidiendo en últimas 2 semanas.',
    timestamp: 'Hace 2 horas',
    priority: 'high',
    actions: ['Evaluar Opciones', 'Ver Detalles', 'Snooze'],
    isNew: true,
    decisionType: 'tactical',
    timeframe: '0-15 días',
    impact: 'immediate'
  },
  {
    id: '2', 
    type: 'opportunity',
    title: 'Oportunidad Halloween',
    message: 'Halloween en 90 días. Histórico: +280% chocolates. Stock actual solo cubre 45% demanda estimada.',
    timestamp: 'Hace 4 horas',
    priority: 'medium',
    actions: ['Ver Forecast', 'Calculate Order', 'Dismiss'],
    decisionType: 'strategic',
    timeframe: '60-90 días',
    impact: 'short-term'
  },
  {
    id: '3',
    type: 'insight',
    title: 'Cambio Patrón Farmatodo',
    message: 'Farmatodo aumentó 40% pedidos chiclets. Adams Tutti-Frutti stock insuficiente si trend continúa.',
    timestamp: 'Hace 6 horas',
    priority: 'medium',
    actions: ['Contact Client', 'Adjust Forecast', 'Mark Reviewed'],
    decisionType: 'strategic',
    timeframe: '30-60 días',
    impact: 'short-term'
  },
  {
    id: '4',
    type: 'critical',
    title: 'Cliente Overdue - Zulia',
    message: 'Distribuidora Zulia: 15 días sin pedido. Patrón histórico indica pérdida potencial de cliente.',
    timestamp: 'Hace 8 horas',
    priority: 'high',
    actions: ['Llamar Ahora', 'Ver Historial', 'Crear Alerta'],
    decisionType: 'tactical',
    timeframe: '0-3 días',
    impact: 'immediate'
  },
  {
    id: '5',
    type: 'opportunity',
    title: 'Demanda Emergente Halls',
    message: 'Caramelos Halls: +65% demanda últimas 3 semanas. Competencia reporta stockout en Caracas.',
    timestamp: 'Hace 1 día',
    priority: 'medium',
    actions: ['Increase Stock', 'Contact Suppliers', 'Market Analysis'],
    decisionType: 'tactical',
    timeframe: '7-21 días',
    impact: 'immediate'
  },
  {
    id: '6',
    type: 'insight',
    title: 'Inventario Bloqueado Alto',
    message: '15.4% del inventario está reservado vs 12% promedio. Red Bull tiene 68% reservado, revisar capacidad de despacho.',
    timestamp: 'Hace 3 horas',
    priority: 'medium',
    actions: ['Revisar Logística', 'Acelerar Despachos', 'Análisis Capacidad'],
    decisionType: 'tactical',
    timeframe: '1-7 días',
    impact: 'immediate'
  },
  {
    id: '7',
    type: 'critical',
    title: 'Mercancía en Tránsito Retrasada',
    message: 'Contenedor Snickers (3,000 unidades) lleva 2 días de retraso. Cliente Supermercados Líder esperando.',
    timestamp: 'Hace 1 hora',
    priority: 'high',
    actions: ['Rastrear Envío', 'Contactar Cliente', 'Plan Contingencia'],
    decisionType: 'tactical',
    timeframe: '0-24 horas',
    impact: 'immediate'
  },
  {
    id: '8',
    type: 'opportunity',
    title: 'Oportunidad Mejora Margen',
    message: 'Red Bull genera ROI 410% vs promedio 265%. Automercados Plaza tiene margen 38% pero baja frecuencia (c/15 días). Potencial +$8K/mes.',
    timestamp: 'Hace 30 minutos',
    priority: 'medium',
    actions: ['Analizar Capacidad', 'Proponer Descuentos', 'Plan Frecuencia'],
    decisionType: 'strategic',
    timeframe: '30-90 días',
    impact: 'long-term'
  },
  {
    id: '9',
    type: 'insight',
    title: 'Diversificación de Proveedores Crítica',
    message: '78% del inventario depende de 2 proveedores. Riesgo país Venezuela + volatilidad cambio. Recomendar diversificar a Colombia/México.',
    timestamp: 'Hace 2 días',
    priority: 'medium',
    actions: ['Evaluar Proveedores', 'Plan Diversificación', 'Análisis Riesgo'],
    decisionType: 'strategic',
    timeframe: '6-12 meses',
    impact: 'long-term'
  },
  {
    id: '10',
    type: 'opportunity',
    title: 'Expansión Categoría Energy Drinks',
    message: 'Energy drinks crecimiento 45% anual. Monster/Redbull alta demanda insatisfecha. Oportunidad ampliar portafolio antes Q4.',
    timestamp: 'Hace 1 día',
    priority: 'medium',
    actions: ['Research Marcas', 'Análisis Márgenes', 'Plan Expansión'],
    decisionType: 'strategic',
    timeframe: '3-6 meses',
    impact: 'long-term'
  },
  {
    id: '11',
    type: 'insight',
    title: 'Optimización Flujo de Caja',
    message: 'Términos de pago promedio: 18 días. Proveedores internacionales exigen prepago. Evaluar línea de crédito para mejorar liquidez.',
    timestamp: 'Hace 4 horas',
    priority: 'medium',
    actions: ['Evaluar Financiamiento', 'Renegociar Términos', 'Plan Liquidez'],
    decisionType: 'strategic',
    timeframe: '1-3 meses',
    impact: 'long-term'
  },
  {
    id: '12',
    type: 'critical',
    title: 'Restricción Mínimo Pringles',
    message: 'Pringles requiere mínimo 20K unidades vs recomendado 15K. Proveedor único (Kellogg Miami) con 25 días lead time.',
    timestamp: 'Hace 1 hora',
    priority: 'high',
    actions: ['Ajustar a 20K', 'Buscar Stock Local', 'Evaluar Timing'],
    decisionType: 'tactical',
    timeframe: '0-7 días',
    impact: 'immediate'
  },
  {
    id: '13',
    type: 'insight',
    title: 'Dependencia Proveedor Único Red Bull',
    message: 'Red Bull solo disponible via Distribuidora Caracas. Sin proveedores backup. Riesgo concentración alta.',
    timestamp: 'Hace 2 horas',
    priority: 'medium',
    actions: ['Evaluar Alternativas', 'Negociar Términos', 'Plan Contingencia'],
    decisionType: 'strategic',
    timeframe: '30-60 días',
    impact: 'long-term'
  },
  {
    id: '14',
    type: 'opportunity',
    title: 'Optimización Lead Times',
    message: 'Mix productos: 40% locales (7d), 60% internacionales (20d+). Rebalancear hacia proveedores locales podría reducir inventario 15%.',
    timestamp: 'Hace 6 horas',
    priority: 'medium',
    actions: ['Análisis Proveedores', 'Evaluar Costos', 'Plan Transición'],
    decisionType: 'strategic',
    timeframe: '3-6 meses',
    impact: 'long-term'
  }
];

// Supplier Database
export const suppliersDatabase: Supplier[] = [
  // Proveedores Locales Venezuela
  {
    id: 'SUP_VEN_001',
    name: 'Distribuidora Caracas C.A.',
    country: 'Venezuela',
    type: 'local',
    paymentTerms: '30 días',
    leadTimeDays: 7,
    minimumOrder: 5000,
    currency: 'USD',
    reliability: 'high',
    pricePerUnit: 12.5,
    lastOrderDate: '2024-07-15',
    riskFactors: ['Variación precio combustible', 'Disponibilidad divisa'],
    strengths: ['Entrega rápida', 'Conoce mercado local', 'Flexible términos']
  },
  {
    id: 'SUP_VEN_002', 
    name: 'Importadora Valencia S.A.',
    country: 'Venezuela',
    type: 'local',
    paymentTerms: '15 días',
    leadTimeDays: 5,
    minimumOrder: 3000,
    currency: 'USD',
    reliability: 'medium',
    pricePerUnit: 13.2,
    lastOrderDate: '2024-08-01',
    riskFactors: ['Capacidad limitada', 'Dependiente de importaciones'],
    strengths: ['Precios competitivos', 'Relación comercial sólida']
  },
  // Proveedores Colombia
  {
    id: 'SUP_COL_001',
    name: 'Comercializadora Bogotá Ltda',
    country: 'Colombia',
    type: 'regional',
    paymentTerms: '45 días',
    leadTimeDays: 12,
    minimumOrder: 10000,
    currency: 'USD',
    reliability: 'high',
    pricePerUnit: 11.8,
    lastOrderDate: '2024-06-20',
    riskFactors: ['Demoras frontera', 'Documentación aduanera'],
    strengths: ['Mejor precio', 'Stock garantizado', 'Calidad consistente']
  },
  {
    id: 'SUP_COL_002',
    name: 'Grupo Empresarial Medellín',
    country: 'Colombia',
    type: 'regional', 
    paymentTerms: '30 días',
    leadTimeDays: 15,
    minimumOrder: 8000,
    currency: 'USD',
    reliability: 'medium',
    pricePerUnit: 12.1,
    lastOrderDate: '2024-07-28',
    riskFactors: ['Fluctuación COP/USD', 'Transporte terrestre'],
    strengths: ['Variedad productos', 'Términos flexibles']
  },
  // Proveedores Internacionales
  {
    id: 'SUP_USA_001',
    name: 'Kellogg Distribution Miami',
    country: 'USA',
    type: 'international',
    paymentTerms: 'Prepago',
    leadTimeDays: 25,
    minimumOrder: 20000,
    currency: 'USD',
    reliability: 'high',
    pricePerUnit: 10.5,
    lastOrderDate: '2024-05-15',
    riskFactors: ['Mínimos altos', 'Prepago requerido', 'Shipping costs'],
    strengths: ['Mejor precio', 'Calidad premium', 'Stock ilimitado']
  },
  {
    id: 'SUP_MEX_001',
    name: 'Distribuidora Monterrey S.A.',
    country: 'México',
    type: 'international',
    paymentTerms: '60 días',
    leadTimeDays: 20,
    minimumOrder: 15000,
    currency: 'USD', 
    reliability: 'medium',
    pricePerUnit: 11.2,
    lastOrderDate: '2024-06-10',
    riskFactors: ['Documentación compleja', 'Transporte marítimo'],
    strengths: ['Buenos términos pago', 'Experiencia LATAM']
  }
];

export const mockProducts: ProductRecommendation[] = [
  {
    sku: 'SAV001',
    name: 'Savoy Tango 20g',
    currentStock: 0,
    trend: '🔥 Critical',
    recommendedOrder: 50000,
    reasoning: 'Múltiples clientes solicitando + stockout inminente',
    priority: 'critical',
    estimatedCost: 210000, // Adjusted for minimum order
    profitability: {
      marginPercent: 42,
      grossProfit: 88200, // Adjusted for actual order qty
      roi: 320,
      contributionMargin: 5.04
    },
    rotation: {
      daysSinceLastOrder: 45,
      averageOrderFrequency: 35,
      inventoryTurnover: 8.2,
      velocityScore: 'fast'
    },
    // Supply Chain Reality
    primarySupplier: suppliersDatabase[4], // Kellogg Miami - ONLY supplier
    minimumOrderQty: 20000,
    leadTimeDays: 25,
    supplyChainConstraints: {
      isMinimumMet: false, // 15K < 20K minimum
      adjustedOrderQty: 20000, // Must order minimum
      totalLeadTime: 25,
      supplyRisk: 'high', // Critical product + long lead time
      alternativeAction: 'Order minimum 20K or find emergency local stock'
    },
    alternativeSuppliers: [
      suppliersDatabase[0], // Emergency backup - Distribuidora Caracas
    ],
    supplierAnalysis: {
      primarySupplierName: 'Kellogg Miami (Exclusivo)',
      leadTimeWarning: 'CRITICO: 25 días lead time vs stockout en 12 días',
      minimumOrderWarning: 'Mínimo 20K vs recomendado 15K (+$30K inversión)',
      recommendation: 'URGENTE: Contactar backup local o aceptar sobreinventario',
      riskAlert: 'Producto crítico con proveedor único internacional'
    }
  },
  {
    sku: 'CHU001',
    name: 'Chupetas Pico Dulce 100u',
    currentStock: 2500,
    trend: '↗️ +25%',
    recommendedOrder: 30000,
    reasoning: 'Demanda escolar aumentando + nueva temporada',
    priority: 'high',
    estimatedCost: 240000, // 20K at $12.1 from Colombia
    profitability: {
      marginPercent: 38,
      grossProfit: 91200,
      roi: 285,
      contributionMargin: 4.18
    },
    rotation: {
      daysSinceLastOrder: 28,
      averageOrderFrequency: 42,
      inventoryTurnover: 6.8,
      velocityScore: 'medium'
    },
    // Supply Chain Reality  
    primarySupplier: suppliersDatabase[2], // Comercializadora Bogotá - ONLY supplier
    minimumOrderQty: 10000,
    leadTimeDays: 12,
    supplyChainConstraints: {
      isMinimumMet: true, // 20K > 10K minimum
      adjustedOrderQty: 20000,
      totalLeadTime: 12,
      supplyRisk: 'medium', // Halloween timing + border delays
      alternativeAction: undefined
    },
    alternativeSuppliers: [
      suppliersDatabase[5], // Monterrey backup
    ],
    supplierAnalysis: {
      primarySupplierName: 'Comercializadora Bogotá (Exclusivo)',
      leadTimeWarning: undefined,
      minimumOrderWarning: undefined,
      recommendation: 'Orden normal - timing adecuado para Halloween',
      riskAlert: 'Monitorear demoras frontera Colombia cerca de Halloween'
    }
  },
  {
    sku: 'CHI001', 
    name: 'Chiclets Adams Tutti-Frutti 100u',
    currentStock: 1800,
    trend: '⚡ +40%',
    recommendedOrder: 25000,
    reasoning: 'Aumento demanda en farmacias y kioscos',
    priority: 'high',
    estimatedCost: 125000, // 10K at $12.5 from Caracas
    profitability: {
      marginPercent: 52,
      grossProfit: 65000,
      roi: 410,
      contributionMargin: 18.20
    },
    rotation: {
      daysSinceLastOrder: 15,
      averageOrderFrequency: 21,
      inventoryTurnover: 12.5,
      velocityScore: 'fast'
    },
    // Supply Chain Reality
    primarySupplier: suppliersDatabase[0], // Distribuidora Caracas - ONLY supplier
    minimumOrderQty: 5000,
    leadTimeDays: 7,
    supplyChainConstraints: {
      isMinimumMet: true, // 10K > 5K minimum
      adjustedOrderQty: 10000,
      totalLeadTime: 7,
      supplyRisk: 'low', // Local supplier, fast delivery
      alternativeAction: undefined
    },
    alternativeSuppliers: [], // No backup - exclusive distributor
    supplierAnalysis: {
      primarySupplierName: 'Distribuidora Caracas (Distribuidor Exclusivo)',
      leadTimeWarning: undefined,
      minimumOrderWarning: undefined, 
      recommendation: 'Orden inmediata - proveedor local confiable',
      riskAlert: 'Sin proveedores backup - dependencia total de distribuidor exclusivo'
    }
  },
  {
    sku: 'CAR001',
    name: 'Caramelos Halls Mentol 25u',
    currentStock: 4200,
    trend: '📈 +65%',
    recommendedOrder: 35000,
    reasoning: 'Temporada gripal + competencia sin stock',
    priority: 'medium',
    estimatedCost: 168000, // 25K at $6.72 from Mexico
    profitability: {
      marginPercent: 35,
      grossProfit: 58800,
      roi: 265,
      contributionMargin: 2.63
    },
    rotation: {
      daysSinceLastOrder: 18,
      averageOrderFrequency: 38,
      inventoryTurnover: 7.2,
      velocityScore: 'medium'
    },
    // Supply Chain Reality
    primarySupplier: suppliersDatabase[5], // Distribuidora Monterrey - ONLY supplier
    minimumOrderQty: 15000,
    leadTimeDays: 20,
    supplyChainConstraints: {
      isMinimumMet: true, // 25K > 15K minimum
      adjustedOrderQty: 25000,
      totalLeadTime: 20,
      supplyRisk: 'medium', // International + documentation
      alternativeAction: undefined
    },
    alternativeSuppliers: [
      suppliersDatabase[1], // Importadora Valencia backup
    ],
    supplierAnalysis: {
      primarySupplierName: 'Distribuidora Monterrey (Exclusivo)',
      leadTimeWarning: undefined,
      minimumOrderWarning: undefined,
      recommendation: 'Aprovechar oportunidad - orden de 25K está sobre mínimo',
      riskAlert: 'Documentación México puede demorar - planificar 25 días total'
    }
  },
  {
    sku: 'CHO001',
    name: 'Chocolates Jet 30g',
    currentStock: 8500,
    trend: '➡️ Estable',
    recommendedOrder: 40000,
    reasoning: 'Mantenimiento demanda estacional',
    priority: 'medium',
    estimatedCost: 240000, // 30K at $8.0 from Medellín
    profitability: {
      marginPercent: 28,
      grossProfit: 67200,
      roi: 195,
      contributionMargin: 2.24
    },
    rotation: {
      daysSinceLastOrder: 12,
      averageOrderFrequency: 14,
      inventoryTurnover: 18.2,
      velocityScore: 'fast'
    },
    // Supply Chain Reality
    primarySupplier: suppliersDatabase[3], // Grupo Medellín - ONLY supplier
    minimumOrderQty: 8000,
    leadTimeDays: 15,
    supplyChainConstraints: {
      isMinimumMet: true, // 30K > 8K minimum
      adjustedOrderQty: 30000,
      totalLeadTime: 15,
      supplyRisk: 'low', // Stable product + reliable supplier
      alternativeAction: undefined
    },
    alternativeSuppliers: [
      suppliersDatabase[0], // Distribuidora Caracas backup
    ],
    supplierAnalysis: {
      primarySupplierName: 'Grupo Medellín (Distribuidor Oficial)',
      leadTimeWarning: undefined,
      minimumOrderWarning: undefined,
      recommendation: 'Orden rutinaria - producto estable con buen margen',
      riskAlert: undefined
    }
  }
];

export const mockClients: ClientIntelligence[] = [
  {
    id: 'CLI001',
    name: 'Supermercados Líder',
    lastOrder: 'Hace 8 días',
    nextOrderPredicted: 'En 3 días', 
    probability: 85,
    insight: 'Patrón regular, alta confianza',
    status: 'active',
    monthlyVolume: 45000,
    profitability: {
      marginPercent: 34,
      grossProfitMonthly: 15300,
      ltv: 245000,
      costToServe: 1250,
      profitabilityScore: 'high'
    },
    recurrence: {
      averageDaysBetweenOrders: 11,
      orderFrequencyTrend: 'stable',
      consistencyScore: 92,
      lastOrderDaysAgo: 8,
      totalOrders: 156
    }
  },
  {
    id: 'CLI002',
    name: 'Farmatodo Nacional',
    lastOrder: 'Hace 12 días',
    nextOrderPredicted: 'En 1 semana',
    probability: 72,
    insight: '+Energy drinks, -Chocolates',
    status: 'new_pattern',
    monthlyVolume: 78000,
    profitability: {
      marginPercent: 28,
      grossProfitMonthly: 21840,
      ltv: 420000,
      costToServe: 2100,
      profitabilityScore: 'high'
    },
    recurrence: {
      averageDaysBetweenOrders: 14,
      orderFrequencyTrend: 'increasing',
      consistencyScore: 78,
      lastOrderDaysAgo: 12,
      totalOrders: 134
    }
  },
  {
    id: 'CLI003',
    name: 'Distribuidora Zulia',
    lastOrder: 'Hace 15 días',
    nextOrderPredicted: '¡OVERDUE!',
    probability: 0,
    insight: 'Contactar hoy - riesgo pérdida',
    status: 'overdue',
    monthlyVolume: 32000,
    profitability: {
      marginPercent: 42,
      grossProfitMonthly: 13440,
      ltv: 185000,
      costToServe: 1850,
      profitabilityScore: 'medium'
    },
    recurrence: {
      averageDaysBetweenOrders: 16,
      orderFrequencyTrend: 'decreasing',
      consistencyScore: 45,
      lastOrderDaysAgo: 15,
      totalOrders: 89
    }
  },
  {
    id: 'CLI004',
    name: 'Automercados Plaza',
    lastOrder: 'Hace 5 días',
    nextOrderPredicted: 'En 10 días',
    probability: 90,
    insight: 'Cliente premium confiable',
    status: 'active',
    monthlyVolume: 56000,
    profitability: {
      marginPercent: 38,
      grossProfitMonthly: 21280,
      ltv: 380000,
      costToServe: 1680,
      profitabilityScore: 'high'
    },
    recurrence: {
      averageDaysBetweenOrders: 15,
      orderFrequencyTrend: 'stable',
      consistencyScore: 88,
      lastOrderDaysAgo: 5,
      totalOrders: 142
    }
  },
  {
    id: 'CLI005',
    name: 'Distribuciones Carabobo',
    lastOrder: 'Hace 18 días',
    nextOrderPredicted: 'En 2 días',
    probability: 95,
    insight: 'Pedido grande incoming',
    status: 'active',
    monthlyVolume: 89000,
    profitability: {
      marginPercent: 31,
      grossProfitMonthly: 27590,
      ltv: 520000,
      costToServe: 2450,
      profitabilityScore: 'high'
    },
    recurrence: {
      averageDaysBetweenOrders: 20,
      orderFrequencyTrend: 'stable',
      consistencyScore: 95,
      lastOrderDaysAgo: 18,
      totalOrders: 98
    }
  }
];

export const warehouseData: WarehouseData = {
  location: 'Valencia, Carabobo',
  totalValue: 12300000,
  totalSKUs: 1850,
  occupancyPercent: 78,
  topCategories: [
    { name: 'Chocolates', value: 3200000, percentage: 26, color: '#8B4513' },
    { name: 'Caramelos Duros', value: 2800000, percentage: 23, color: '#FF6B35' },
    { name: 'Chiclets y Gomas', value: 2100000, percentage: 17, color: '#4A90E2' },
    { name: 'Chupetas', value: 1900000, percentage: 15, color: '#F5A623' },
    { name: 'Confites Mentolados', value: 1200000, percentage: 10, color: '#D0021B' },
    { name: 'Otros Dulces', value: 1100000, percentage: 9, color: '#9013FE' }
  ]
};

export const dashboardViews: DashboardView[] = [
  {
    id: 'daily-actions',
    name: 'Daily Actions',
    icon: 'Target',
    component: 'DailyActionCenter'
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    icon: 'LayoutDashboard',
    component: 'Dashboard'
  },
  {
    id: 'purchase-intelligence',
    name: 'Purchase Intelligence',
    icon: 'ShoppingCart',
    component: 'PurchaseIntelligence'
  },
  {
    id: 'client-intelligence',
    name: 'Client Intelligence',
    icon: 'Users',
    component: 'ClientIntelligence'
  },
  {
    id: 'roi-tracker',
    name: 'ROI Tracker',
    icon: 'TrendingUp',
    component: 'ROITracker'
  },
  {
    id: 'optimization-reports',
    name: 'Optimization Reports',
    icon: 'FileText',
    component: 'OptimizationReports'
  }
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    sender: 'user',
    message: '¿Cuál es el status del inventario de chocolates para Halloween?',
    timestamp: '14:32',
    type: 'text'
  },
  {
    id: '2',
    sender: 'agent',
    message: 'Basado en datos históricos, Halloween genera un aumento del 280% en demanda de chocolates. Tu stock actual de chocolates ($3.2M) solo cubre el 45% de la demanda estimada.',
    timestamp: '14:32',
    type: 'data'
  },
  {
    id: '3',
    sender: 'agent',
    message: 'Recomiendo ordenar: Oreo Original (20,000 unidades), Snickers (25,000 unidades), Kit Kat (15,000 unidades). Inversión estimada: $425,000.',
    timestamp: '14:33',
    type: 'suggestion'
  },
  {
    id: '4',
    sender: 'user',
    message: '¿Qué clientes están en riesgo de cancelar pedidos?',
    timestamp: '14:35',
    type: 'text'
  },
  {
    id: '5',
    sender: 'agent',
    message: 'Identifiqué 3 clientes en riesgo: Distribuidora Zulia (15 días sin pedido, patrón irregular), Supermercados Miranda (reducción 30% último mes), Comercial Táchira (competencia ganando market share).',
    timestamp: '14:35',
    type: 'data'
  },
  {
    id: '6',
    sender: 'user',
    message: 'Dame un resumen ejecutivo de los próximos 30 días',
    timestamp: '14:38',
    type: 'text'
  },
  {
    id: '7',
    sender: 'agent',
    message: '📊 **Próximos 30 días**: \n• 3 stockouts críticos (Pringles, Red Bull, Doritos)\n• Oportunidad Halloween: +$890K revenue potencial\n• 5 clientes requieren contacto urgente\n• Contenedor recomendado: $1.1M, ROI estimado 340%\n• Meta alcanzable: +15% ventas vs mes anterior',
    timestamp: '14:39',
    type: 'suggestion'
  },
  {
    id: '8',
    sender: 'user',
    message: 'Muéstrame el status del inventario por estados',
    timestamp: '14:42',
    type: 'text'
  },
  {
    id: '9',
    sender: 'agent',
    message: '📦 **Estado del Inventario**: \n• Disponible: 58.2% ($7.15M) - Listo para venta\n• Reservado: 15.4% ($1.89M) - Pedidos confirmados\n• En tránsito salida: 10.2% ($1.26M) - Camino a clientes\n• En tránsito llegada: 8.1% ($990K) - Llegando de proveedores\n• En pedido: 8.1% ($1.01M) - Ordenado, no despachado',
    timestamp: '14:42',
    type: 'data'
  },
  {
    id: '10',
    sender: 'agent',
    message: '⚠️ Detecté que Red Bull tiene 68% de su inventario reservado (vs 15% promedio). Esto puede causar problemas de flujo de caja y capacidad de respuesta.',
    timestamp: '14:43',
    type: 'suggestion'
  },
  {
    id: '11',
    sender: 'user',
    message: 'Analízame la rentabilidad por cliente',
    timestamp: '14:45',
    type: 'text'
  },
  {
    id: '12',
    sender: 'agent',
    message: '💰 **Análisis de Rentabilidad por Cliente**: \n• Distribuciones Carabobo: $27,590/mes (margen 31%) - TOP performer\n• Farmatodo: $21,840/mes (margen 28%) - Alto volumen\n• Automercados Plaza: $21,280/mes (margen 38%) - Mejor margen\n• Supermercados Líder: $15,300/mes (margen 34%) - Muy consistente\n• Distribuidora Zulia: $13,440/mes (margen 42%) - OVERDUE, alto riesgo',
    timestamp: '14:45',
    type: 'data'
  },
  {
    id: '13',
    sender: 'agent',
    message: '🎯 **Recomendación**: Prioriza Distribuidora Zulia (contacto urgente) y aumenta frecuencia con Automercados Plaza (mejor margen). Total ganancia mensual: $99,450.',
    timestamp: '14:46',
    type: 'suggestion'
  },
  {
    id: '14',
    sender: 'user',
    message: 'Dame recomendaciones estratégicas para los próximos 6 meses',
    timestamp: '14:48',
    type: 'text'
  },
  {
    id: '15',
    sender: 'agent',
    message: '🎯 **Visión Estratégica 6 meses**: \n• Diversificar proveedores: 78% dependencia crítica \n• Expandir Energy Drinks: +45% crecimiento anual \n• Optimizar flujo caja: términos prepago limitantes \n• Preparar Q4: Halloween + Navidad = +180% demanda \n• Evaluar línea crédito para liquidez',
    timestamp: '14:48',
    type: 'strategic',
    decisionType: 'strategic',
    timeframe: '6 meses'
  },
  {
    id: '16',
    sender: 'user', 
    message: '¿Cuáles son las decisiones más urgentes de hoy?',
    timestamp: '14:50',
    type: 'text'
  },
  {
    id: '17',
    sender: 'agent',
    message: '🚨 **Acciones Tácticas Hoy**: \n• URGENTE: Llamar Distribuidora Zulia (15 días overdue) \n• Rastrear contenedor Snickers retrasado (Líder esperando) \n• Acelerar despacho Red Bull (68% inventario bloqueado) \n• Contactar proveedor Pringles (stockout en 12 días)',
    timestamp: '14:50',
    type: 'tactical',
    decisionType: 'tactical',
    timeframe: '0-24 horas'
  },
  {
    id: '18',
    sender: 'user',
    message: 'Explícame el tema de los mínimos de orden',
    timestamp: '14:52',
    type: 'text'
  },
  {
    id: '19',
    sender: 'agent',
    message: '📦 **Restricciones de Mínimos por Proveedor**: \n\n• **Pringles**: Kellogg Miami - 20K mín (vs 15K recom) \n• **Red Bull**: Caracas - 5K mín ✅ cumplido \n• **Oreo**: Colombia - 10K mín ✅ cumplido \n• **Snickers**: México - 15K mín ✅ cumplido \n• **Coca-Cola**: Medellín - 8K mín ✅ cumplido\n\n⚠️ Solo Pringles requiere ajuste: +$30K inversión extra',
    timestamp: '14:52',
    type: 'tactical',
    decisionType: 'tactical',
    timeframe: '1-7 días'
  },
  {
    id: '20',
    sender: 'user',
    message: '¿Cómo optimizamos los lead times?',
    timestamp: '14:54',
    type: 'text'
  },
  {
    id: '21',
    sender: 'agent',
    message: '🕐 **Análisis Lead Times**: \n\n**Locales (7 días)**: Red Bull \n**Regionales (12-15 días)**: Oreo, Coca-Cola \n**Internacionales (20-25 días)**: Pringles, Snickers \n\n🎯 **Oportunidades**: \n• Buscar alternativas locales para Pringles \n• Evaluar proveedores Colombia para Snickers \n• Potencial reducción 40% tiempo promedio',
    timestamp: '14:54',
    type: 'strategic',
    decisionType: 'strategic',
    timeframe: '3-6 meses'
  }
];

export const chatSuggestions: ChatSuggestion[] = [
  {
    id: '1',
    text: '¿Cuáles productos están cerca de stockout?',
    category: 'inventory'
  },
  {
    id: '2',
    text: 'Analízame la rentabilidad por cliente',
    category: 'analytics'
  },
  {
    id: '3',
    text: '¿Qué clientes van a pedir pronto?',
    category: 'clients'
  },
  {
    id: '4',
    text: 'Muéstrame productos con mejor ROI',
    category: 'analytics'
  }
];

export const inventoryFlow: InventoryFlow[] = [
  {
    status: 'available',
    label: 'Disponible',
    quantity: 892340,
    value: 7150000,
    percentage: 58.2,
    color: '#059669',
    icon: 'Package',
    description: 'En almacén, listo para venta'
  },
  {
    status: 'reserved',
    label: 'Reservado',
    quantity: 234560,
    value: 1890000,
    percentage: 15.4,
    color: '#d97706',
    icon: 'Clock',
    description: 'Pedidos confirmados, pendiente despacho'
  },
  {
    status: 'in_transit_out',
    label: 'En Tránsito (Salida)',
    quantity: 156780,
    value: 1260000,
    percentage: 10.2,
    color: '#2563eb',
    icon: 'Truck',
    description: 'Camino a clientes'
  },
  {
    status: 'in_transit_in',
    label: 'En Tránsito (Llegada)',
    quantity: 123450,
    value: 990000,
    percentage: 8.1,
    color: '#7c3aed',
    icon: 'Ship',
    description: 'Camino desde proveedores'
  },
  {
    status: 'on_order',
    label: 'En Pedido',
    quantity: 198760,
    value: 1010000,
    percentage: 8.1,
    color: '#dc2626',
    icon: 'ShoppingCart',
    description: 'Ordenado a proveedores, no despachado'
  }
];

export const productInventoryDetails: ProductInventory[] = [
  {
    sku: 'PRI001',
    name: 'Pringles Original 165g',
    totalQuantity: 0,
    totalValue: 0,
    category: 'Snacks Salados',
    lastUpdated: '2024-08-14 09:30',
    statuses: [
      { status: 'available', quantity: 0, value: 0 },
      { status: 'reserved', quantity: 0, value: 0 },
      { status: 'in_transit_out', quantity: 0, value: 0 },
      { status: 'in_transit_in', quantity: 0, value: 0 },
      { status: 'on_order', quantity: 15000, value: 180000, details: 'Contenedor en proceso' }
    ]
  },
  {
    sku: 'ORE001',
    name: 'Oreo Original 154g',
    totalQuantity: 12500,
    totalValue: 137500,
    category: 'Galletas',
    lastUpdated: '2024-08-14 08:15',
    statuses: [
      { status: 'available', quantity: 2000, value: 22000, details: 'Almacén Valencia' },
      { status: 'reserved', quantity: 8500, value: 93500, details: '12 pedidos confirmados' },
      { status: 'in_transit_out', quantity: 2000, value: 22000, details: 'Ruta Caracas-Maracaibo' },
      { status: 'in_transit_in', quantity: 0, value: 0 },
      { status: 'on_order', quantity: 0, value: 0 }
    ]
  },
  {
    sku: 'RBU001',
    name: 'Red Bull Energy 250ml',
    totalQuantity: 8500,
    totalValue: 297500,
    category: 'Bebidas',
    lastUpdated: '2024-08-14 07:45',
    statuses: [
      { status: 'available', quantity: 1200, value: 42000, details: 'Stock crítico' },
      { status: 'reserved', quantity: 5800, value: 203000, details: 'Farmatodo + 8 clientes' },
      { status: 'in_transit_out', quantity: 1500, value: 52500, details: 'Distribuidora Zulia' },
      { status: 'in_transit_in', quantity: 0, value: 0 },
      { status: 'on_order', quantity: 10000, value: 350000, details: 'Llegada estimada: 5 días' }
    ]
  },
  {
    sku: 'SNI001',
    name: 'Snickers Original 50g',
    totalQuantity: 15400,
    totalValue: 115500,
    category: 'Chocolates',
    lastUpdated: '2024-08-14 06:20',
    statuses: [
      { status: 'available', quantity: 3500, value: 26250, details: 'Demanda creciente' },
      { status: 'reserved', quantity: 6200, value: 46500, details: 'Halloween pre-orders' },
      { status: 'in_transit_out', quantity: 2700, value: 20250, details: 'Supermercados Líder' },
      { status: 'in_transit_in', quantity: 3000, value: 22500, details: 'Llegada mañana' },
      { status: 'on_order', quantity: 25000, value: 187500, details: 'Contenedor Halloween' }
    ]
  },
  {
    sku: 'COC001',
    name: 'Coca-Cola 350ml',
    totalQuantity: 25600,
    totalValue: 205000,
    category: 'Bebidas',
    lastUpdated: '2024-08-14 10:00',
    statuses: [
      { status: 'available', quantity: 8000, value: 64000, details: 'Stock estable' },
      { status: 'reserved', quantity: 12000, value: 96000, details: 'Pedidos semanales' },
      { status: 'in_transit_out', quantity: 3600, value: 28800, details: 'Rutas activas' },
      { status: 'in_transit_in', quantity: 2000, value: 16000, details: 'Reposición regular' },
      { status: 'on_order', quantity: 0, value: 0 }
    ]
  }
];