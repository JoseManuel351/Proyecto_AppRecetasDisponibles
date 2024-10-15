/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j35GqsvgMwv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#f8f8f8]">
      <header className="sticky top-0 z-50 bg-[#ff6b6b] px-4 py-3 shadow-sm md:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center" prefetch={false}>
            <BookIcon className="h-6 w-6 text-white" />
            <span className="ml-2 text-lg font-medium text-white">Recipe Planner</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-[#ffa500] px-4 text-sm font-medium text-white transition-colors hover:bg-[#ff8c00] focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] focus:ring-offset-2"
              prefetch={false}
            >
              Login
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md border border-[#ff6b6b] bg-[#f8f8f8] px-4 text-sm font-medium text-[#333] transition-colors hover:bg-[#e6e6e6] focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] focus:ring-offset-2"
              prefetch={false}
            >
              Register
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-[#ff6b6b] sm:text-5xl">
                  Personalized Meal Planning
                </h1>
                <p className="max-w-[600px] text-[#666] md:text-xl">
                  Enter your pantry items and we'll generate a weekly meal plan tailored to your preferences and
                  ingredients.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff4d4d] focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] focus:ring-offset-2"
                  prefetch={false}
                >
                  Create Plan
                </Link>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width="550"
              height="310"
              alt="Meal"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#ffefd5]">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <img
              src="https://images.pexels.com/photos/6670125/pexels-photo-6670125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width="550"
              height="310"
              alt="Ingredients"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#ff6b6b] sm:text-5xl">Utilize Your Pantry</h2>
                <p className="max-w-[600px] text-[#666] md:text-xl">
                  Simply enter the ingredients you have on hand, and we'll create a personalized meal plan that
                  incorporates them.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff4d4d] focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] focus:ring-offset-2"
                  prefetch={false}
                >
                  Start Planning
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#ff6b6b] sm:text-5xl">Discover New Recipes</h2>
                <p className="max-w-[600px] text-[#666] md:text-xl">
                  Our meal planning tool will introduce you to delicious new recipes that fit your dietary preferences
                  and ingredient availability.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff4d4d] focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] focus:ring-offset-2"
                  prefetch={false}
                >
                  Start Planning
                </Link>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/833109/pexels-photo-833109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width="550"
              height="310"
              alt="Recipes"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>
      </main>
      <footer className="bg-[#ffefd5] p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#ff6b6b]">Company</h3>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              About Us
            </Link>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Careers
            </Link>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#ff6b6b]">Features</h3>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Personalized Meal Plans
            </Link>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Pantry Management
            </Link>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Recipe Discovery
            </Link>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Dietary Preferences
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#ff6b6b]">Resources</h3>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              FAQ
            </Link>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Meal Planning Tips
            </Link>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Grocery Shopping Guides
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#ff6b6b]">Legal</h3>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#ff6b6b]">Contact</h3>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Support
            </Link>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Partnerships
            </Link>
            <Link href="#" className="text-[#666] hover:text-[#ff6b6b]" prefetch={false}>
              Feedback
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}
