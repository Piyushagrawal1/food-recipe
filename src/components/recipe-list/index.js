import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from '../ui/button';
// import Image from 'next/image';

const RecipeList = ({ recipeList }) => {
  console.log(recipeList);
  return (
    <>
      <Link href={'/'}
        className='text-center justify-end p-5 flex '
      >
        <Button>
          Go Home
        </Button>
      </Link>
      <div>

        <div className='p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full'>
          <h2 className='text-4xl font-bold text-gray-800 mb-12'>Recipes</h2>


          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
              recipeList && recipeList.length > 0
                ? recipeList.map((recipe) => (
                  <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
                    <Card>
                      <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                          <img
                            src={recipe.image}
                            alt={recipe.name}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>

                        <div className='p-6'>
                          <h3 className='font-bold text-lg text-gray-900' >
                            {recipe.name}
                          </h3>
                          <div className='mt-4 flex items-center flex-wrap gap-2'>
                            <p className='text-lg text-gray-600'>
                              {recipe.rating}
                            </p>
                            <div className="ml-auto">
                              <p className="text-lg text-gray-600 font-bold">
                                {recipe.cuisine}
                              </p>
                            </div>
                          </div>
                        </div>

                      </CardContent>
                    </Card>
                  </Link>
                ))
                : <p>No recipes found.</p>
            }
          </div>
        </div>
      </div>
    </>
    
  );
}

export default RecipeList;
