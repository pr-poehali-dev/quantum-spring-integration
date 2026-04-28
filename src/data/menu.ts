export interface Dish {
  id: string
  name: string
  description: string
  price: number
  weight?: string
  spicy?: boolean
  popular?: boolean
}

export interface Category {
  id: string
  slug: string
  name: string
  nameEn: string
  description: string
  emoji: string
  image: string
  dishes: Dish[]
}

const DIMSUMS_IMG = "https://cdn.poehali.dev/projects/85a0372c-0eff-4b54-8214-9d4071cc1f15/files/ff9c59d2-e888-4a79-8723-dda49a09e1d3.jpg"
const NOODLES_IMG = "https://cdn.poehali.dev/projects/85a0372c-0eff-4b54-8214-9d4071cc1f15/files/ee8d3ca3-c5ad-4c56-a9cc-f531b5de7bca.jpg"

export const categories: Category[] = [
  {
    id: "dimsums",
    slug: "dimsums",
    name: "Димсамы",
    nameEn: "Dim Sum",
    description: "Классические паровые корзиночки с разнообразными начинками — визитная карточка BAMBOO",
    emoji: "🥟",
    image: DIMSUMS_IMG,
    dishes: [
      { id: "d1", name: "Har Gow", description: "Паровые креветочные пельмени в прозрачном тесте", price: 490, weight: "4 шт / 120г", popular: true },
      { id: "d2", name: "Siu Mai", description: "Открытые пельмени со свининой и креветкой", price: 450, weight: "4 шт / 120г", popular: true },
      { id: "d3", name: "Char Siu Bao", description: "Паровые булочки с запечённой свининой BBQ", price: 420, weight: "3 шт / 150г" },
      { id: "d4", name: "Lo Mai Gai", description: "Клейкий рис с курицей и грибами в листьях лотоса", price: 520, weight: "1 шт / 200г" },
      { id: "d5", name: "Cheong Fun", description: "Рисовые роллы с креветкой в соусе Hoisin", price: 480, weight: "3 шт / 180г" },
      { id: "d6", name: "Wu Gok", description: "Слоёные корзиночки с свининой и грибами", price: 440, weight: "3 шт / 130г", spicy: true },
    ],
  },
  {
    id: "noodles",
    slug: "noodles",
    name: "Лапша",
    nameEn: "Noodles",
    description: "Вок-лапша, бульоны и авторские сочетания с лучшими ингредиентами",
    emoji: "🍜",
    image: NOODLES_IMG,
    dishes: [
      { id: "n1", name: "Dan Dan Mian", description: "Острая лапша с фаршем, арахисом и кунжутной пастой", price: 620, weight: "350г", spicy: true, popular: true },
      { id: "n2", name: "Lo Mein с говядиной", description: "Яичная лапша на воке с мраморной говядиной и овощами", price: 720, weight: "380г", popular: true },
      { id: "n3", name: "Wonton Soup", description: "Лёгкий бульон с пельменями вонтон и зелёным луком", price: 540, weight: "400мл" },
      { id: "n4", name: "Chow Fun с уткой", description: "Широкая рисовая лапша с уткой конфи и ростками сои", price: 780, weight: "370г" },
      { id: "n5", name: "Cold Sesame Noodles", description: "Холодная лапша с кунжутным соусом, огурцом и чили", price: 520, weight: "300г", spicy: true },
      { id: "n6", name: "Beef Ho Fun", description: "Широкая лапша на сильном огне с говядиной и луком", price: 690, weight: "360г" },
    ],
  },
  {
    id: "rice",
    slug: "rice",
    name: "Рис и закуски",
    nameEn: "Rice & Starters",
    description: "Жареный рис, хрустящие закуски и лёгкие блюда для начала трапезы",
    emoji: "🍚",
    image: DIMSUMS_IMG,
    dishes: [
      { id: "r1", name: "Yang Chow Fried Rice", description: "Классический жареный рис с яйцом, креветкой и свининой", price: 580, weight: "350г", popular: true },
      { id: "r2", name: "Спринг-роллы", description: "Хрустящие роллы с овощами и фунчозой, соус чили", price: 390, weight: "4 шт / 160г" },
      { id: "r3", name: "Lotus Leaf Rice", description: "Клейкий рис с курицей и грибами, запечённый в листьях лотоса", price: 540, weight: "280г" },
      { id: "r4", name: "Edamame", description: "Соевые бобы с морской солью и чили", price: 280, weight: "200г", spicy: true },
      { id: "r5", name: "Сатэ из курицы", description: "Шашлычки из курицы с арахисовым соусом", price: 460, weight: "5 шт / 200г" },
      { id: "r6", name: "Crispy Tofu", description: "Хрустящий тофу в кисло-сладком соусе с кунжутом", price: 380, weight: "200г" },
    ],
  },
  {
    id: "soups",
    slug: "soups",
    name: "Супы",
    nameEn: "Soups",
    description: "Ароматные бульоны и насыщенные супы на основе традиционных рецептов",
    emoji: "🍲",
    image: NOODLES_IMG,
    dishes: [
      { id: "s1", name: "Том Ям с креветкой", description: "Тайский острый суп с лемонграссом и кокосовым молоком", price: 690, weight: "400мл", spicy: true, popular: true },
      { id: "s2", name: "Суп-пюре из тыквы", description: "Бархатный крем-суп с имбирём и кокосовым молоком", price: 480, weight: "350мл" },
      { id: "s3", name: "Мисо с тофу", description: "Классический японский мисо-суп с тофу и вакаме", price: 380, weight: "300мл" },
      { id: "s4", name: "Hot & Sour Soup", description: "Кисло-острый суп с грибами, тофу и бамбуком", price: 520, weight: "380мл", spicy: true },
      { id: "s5", name: "Фо Бо", description: "Вьетнамский говяжий бульон с рисовой лапшой и зеленью", price: 640, weight: "500мл", popular: true },
      { id: "s6", name: "Куриный бульон с вонтон", description: "Лёгкий куриный бульон с пельменями и кинзой", price: 490, weight: "400мл" },
    ],
  },
  {
    id: "starters",
    slug: "starters",
    name: "Закуски",
    nameEn: "Starters",
    description: "Изысканные холодные закуски и салаты в азиатском стиле",
    emoji: "🥗",
    image: DIMSUMS_IMG,
    dishes: [
      { id: "st1", name: "Pork Belly Bao", description: "Мягкий паровой бао с томлёной свиной грудинкой", price: 420, weight: "2 шт / 160г", popular: true },
      { id: "st2", name: "Салат с водорослями", description: "Маринованные водоросли вакаме с кунжутом и соусом понзу", price: 360, weight: "180г" },
      { id: "st3", name: "Gyoza", description: "Жареные пельмени с свининой и капустой, соус дипинг", price: 440, weight: "5 шт / 150г", popular: true },
      { id: "st4", name: "Чили-масло тофу", description: "Шёлковый тофу с маслом чили и жареным луком-шалот", price: 390, weight: "200г", spicy: true },
      { id: "st5", name: "Peking Duck Roll", description: "Тонкий блин с уткой по-пекински, хойсин и огурцом", price: 680, weight: "2 шт / 120г" },
      { id: "st6", name: "Тартар из тунца", description: "Свежий тунец с авокадо, соусом понзу и чипсами вонтон", price: 750, weight: "160г" },
    ],
  },
  {
    id: "drinks",
    slug: "drinks",
    name: "Напитки",
    nameEn: "Drinks",
    description: "Авторские чаи, свежевыжатые и азиатские напитки",
    emoji: "🍵",
    image: NOODLES_IMG,
    dishes: [
      { id: "dr1", name: "Матча Латте", description: "Церемониальная матча с молоком ореховым или коровьим", price: 380, weight: "300мл", popular: true },
      { id: "dr2", name: "Тайский чай со льдом", description: "Насыщенный чай с кокосовым молоком и льдом", price: 320, weight: "400мл" },
      { id: "dr3", name: "Личи Лимонад", description: "Свежевыжатый лимонад с личи и розмарином", price: 290, weight: "400мл" },
      { id: "dr4", name: "Улун холодный", description: "Охлаждённый китайский улун с персиком", price: 260, weight: "350мл" },
      { id: "dr5", name: "Кокосовая вода", description: "Натуральная кокосовая вода с мятой и лаймом", price: 340, weight: "350мл" },
      { id: "dr6", name: "Jasmine Green Tea", description: "Классический жасминовый зелёный чай, заварник", price: 220, weight: "400мл" },
    ],
  },
]

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug)
