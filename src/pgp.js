/*
* BSD 3-Clause License
*
* Copyright (c) 2019, Dmitry Dvoinikov
* All rights reserved.

* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:

* 1. Redistributions of source code must retain the above copyright notice, this
*    list of conditions and the following disclaimer.

* 2. Redistributions in binary form must reproduce the above copyright notice,
*    this list of conditions and the following disclaimer in the documentation
*    and/or other materials provided with the distribution.

* 3. Neither the name of the copyright holder nor the names of its
*    contributors may be used to endorse or promote products derived from
*    this software without specific prior written permission.

* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
* DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
* FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var payGapPuzzle = {

    run : function (element) {

		var stage = new createjs.Stage(element);
		
		createjs.Touch.enable(stage);
		stage.mouseMoveOutside = true;
		stage.enableMouseOver(10);

		var a1, a2, b1, b2, background;
		
		a1 = new createjs.Bitmap("data:image/png;base64,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");
		a2 = new createjs.Bitmap("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAC2UlEQVRo3u2az2sTQRTHPzOzm9hEYuuPKlX8cSqCCLWl6FFRFBHEg+ClHrx560UPOfekoPgXeBDxoFJQBEH00oNUlKIXD978ha2KRptiku7GQ6YQY7XpZrKZ3ewX3ilkdz773sy892YgUaJEQSWlVFJKBxgEBqWUjpRS9fb2irixjgBjwCxQAH5oKwBfgAvASDabjTa4ECINjAM/geoKVgQmgf4ow95rArTRPgKHogh7PwBsvbdH4u7ZRpsGtkSB+bQB2CWbTKfT9i5kesuZNQi8AIwaHaPJh/m+fxbYZPCRPcCQtcCAA5gOwQkppWtrOH8wGM5LNi+EcG30sADWWZ/edl0+b2zyOo4HXO8a4HK57AOv2jDGO/pjWhnSM3rvNKmpSqXiWxkuOiu6a3CF/iyESNk+TUZ18t8qbAk4HoVV+hlwxkARUlVKFZb5aR9wABgOmhm1ou06/ftDmUwmUyqV8Lzga021Wk15nndDNw/qtRtwgQngRVhhuxd4AnxvQ2bVjFWA/WHO037gfYdgq8DzoANXAf9X1NPhSAcWRR84BsyF/eLNwNsOeHcqlUp1rClwVH/xsGB9/c7OSCmlgAchAj8VQvR0OtEYBLyQgK/aUvjfDgH2m0319pDeG9sJfMm29s6tNsIWgaxtRcMAtQOydgBfc13Xyu7M+TbALgA7rKwLhRBrqB1/Gk009PZnrcYMwpaBE1ZX/0KItcBLQ8Azts7dRh00sE15ukiwX7oPNd0i8Bsb0sjVppyLLQCfihIs+oLKo4Cwn4BtRFA7AxYWl6MIi15hr6yyZp4DthJhrQferQL4JjFQvkkvF4FdkafVKedcE8CTjuPE5gh3fAUve0TtQtoKXnaBr/8BfqzveMVKh4Ffy8AuAifjBotSSv6j//U6CseiQTXM38epeWKuh3Ww88CGuAPvqZvL+VwuJ+gCXaTWax6gS7QRONfX1ydIlChRoib1G3pr0wm+qYYtAAAAAElFTkSuQmCC");
		b1 = new createjs.Bitmap("data:image/png;base64,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");
		b2 = new createjs.Bitmap("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADJklEQVRo3u2by2sTURTGf3debRNIWtNaW0WsKzc+0IUgSv8AnwVxVUVcKi6KtrpSwf9EBMW1LkXcuFXQpUWtVdSNVamttpm48Famw0wzufPIvTEfHMIkw5355txzz3fOnUAXXXRhMkTB1xsE9oeuOwu87pwnKkQJGAdeAm8AH2gE7LP8bVyeayZqtZoADgCPQwQ3smfAyYGBAWEU2f7+fgFMAEstkF2zJWCiUqkYRfoUsNyMnBBi3WfAluUYRuCgomejPH1ca6aWZbnA0+CN27admGTEua90X8gOp/VuBOmjWjLt6ekRwJMMpnLDsqzg8ZzrupZ2hG3btoD5mJtOY1+BXZmFXVYD1ev1M8CWtWPf99OsBeuyHHBIO8JACbADCkt5oDQPq0jCYUmpZybJcKy6jLnUXrJt24giwQM+hFVUBrYIHNGOsOd5FvAih7Q0r2VakjgGrGYsPM7rPK3LwPM00jIUCrPAkO7hfELFy0KIMNk6cEX7xUvG20xg1W5aHkaosjow4ziOhQmQNzqtGM+rwLSUquZAFhOnZRwmJfsRmPI8z6wWTwhDwOWI5l3QfHnOEJ0AIcRWWfXE5V3fdd0x06RlLBqNxqpUTP90drAi8n2flZUVQQfhVtwKHbBHnUJ2GzC3UVqS9gPYYzRT2VC/3iwPB+xeqVQyemqPAp+SiA9pC8BeIxetvr4+AUwCm1toFFSBC8YorBAGgS8K5eAiMGaUh8vlsgAuStJJ0lbQ0yVgSucaOAqbgt0PBS//JtABNQG3m0jJJOXhfVN2EIeBdyrdjhDhX3nGcpa4qdreMVF9xaoqRdLf887LypC7/tdI2bGM8PLd3t5eLWN5lL8vqGTdpl3IUmNnkuukqjqbUwGvpfqqJVVVil5eBHZo4WGpqi4lVVUtNA3C6uuqLuqrZVWVQn2NGKmqUqivB+1+aW0YeJsH2Zg0tQzsbCfhG3mSjcnLD9upqt7nTThGfe0rlGm1Ws1EVSU1x3HC392ROxuFYSQrVaVo34DdheRhqarO0d5tkUqR6itzVaVoP4Htrd68ozgrJin+7wORE44uuujiv8IfeQUrCA3Kf40AAAAASUVORK5CYII=");
		
		background = new createjs.Bitmap("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAJsCAYAAAClLm1gAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpSoVBzuIOmSoDtKCqIijVLEIFkpboVUHk0s/hCYNSYqLo+BacPBjserg4qyrg6sgCH6AuLg6KbpIif9LCi1iPDjux7t7j7t3gFAvM9XsGAdUzTJS8ZiYza2IgVd0YwhBRDAmMVNPpBcy8Bxf9/Dx9S7Ks7zP/Tl6lbzJAJ9IPMt0wyJeJ57etHTO+8QhVpIU4nPiiEEXJH7kuuzyG+eiwwLPDBmZ1BxxiFgstrHcxqxkqMRTxGFF1ShfyLqscN7irJarrHlP/sJgXltOc53mMOJYRAJJiJBRxQbKsBClVSPFRIr2Yx7+QcefJJdMrg0wcsyjAhWS4wf/g9/dmoXJCTcpGAM6X2z7YwQI7AKNmm1/H9t24wTwPwNXWstfqQMzn6TXWlr4COjbBi6uW5q8B1zuAANPumRIjuSnKRQKwPsZfVMO6L8Felbd3pr7OH0AMtTV0g1wcAiMFil7zePdXe29/Xum2d8P1olyz4KooJEAAAAJcEhZcwAALiMAAC4jAXilP3YAACAASURBVHja7N17vE5l/j/+t1NjZ2sMk0lKhhx2kiEmh2qY0kFKmqaDaT7VlEo1ZKYw86mmpqkmMjUdyWjIkD7IVxpEDqERIZskpJrdKENJ5VDI/v3Rw/7tdd97b6e9hf18Ph4eD2vda6973Wvd13Vfr7Wuda0yubm5uQEAAECpU9YuAAAAEAgBAAAQCAEAABAIAQAAEAgBAAAQCAEAABAIAQAAEAgBAAAQCAEAABAIAQAAEAgBAAAQCAEAABAIAQAAEAgBAAAQCAEAABAIAQAAEAgBAAAQCAEAABAIAQAAEAgBAAAQCAEAABAIAQAAEAgBAAAo1YGwT58+Ubdu3XjppZd8CwAAgFKpfGn94Lm5uXu0/IABA6Jfv367tWxWVla8+OKLhb6+efPmGDp0aIwfPz5ycnJiy5YtkZmZGSeddFJcfvnl0aFDh0L/tm7duonpUaNGRbNmzYptvxzs6wcAKC5jx46NW2+9NSZOnBj169e3QxAIS3MgLC5vvfVWXH755bFx48bE/I0bN8a//vWv+Ne//hVPP/10PPPMM3H44Yf7hgJFuuuuu2LYsGF50z179oybb745bbkPP/wwTjvttMS8KVOmRJ06dezEvdCkSZNEPT5r1qw4+uijS83n37ZtWzRs2DAxb+7cufH973/fl4NSLTc3N9atWxerVq2KN998MyZPnhwLFy5Mawt+5zvf2a1yNm/evJg5c2YsWrQocnJyIisrK1q2bBmnnXZaZGVlleg6SrqeO9jXLxAepKZMmRKjR4+OxYsXx9q1ayMi4sYbb4yaNWtGw4YN49RTT422bdtGrVq1SuT9P/roo7joooti27ZtRS73xhtvxBVXXBFjxoyJMmXK+JYCAHxLAW9PrFq1Ks4+++x9ft+1a9dGnz594pVXXkmb/8orr8QDDzwQ3bt3jxtvvDEqVKhQYutAIDxkbN26NX71q1/FnDlzCnx99erVsXr16pg6dWrcfffdsWLFiihXrlyR65w2bVocd9xxe7Qdffr0SYTBGjVqxKBBg6JOnToxderU+PWvf533WnZ2dvzf//1fXHrppb6lAAD7ycqVK2POnDmxaNGimD9/fkREXH/99dG6deuoX79+NGrUKI4//vioUqVKibz/F198ETfeeGO88cYbRS73yCOPxI4dO6Jnz54lsg4EwkPKn//850LD4P7yn//8J2bPnp2Y179//7xL9R06dIgFCxbEkCFD8l5//PHH93sgXLVqlVIBAJQ6X3/9dQwaNKjAMSNycnIiJycnLTiWLZscn7FMmTLxi1/8Ilq0aBH169ePChUqRPv27fdoO0aOHJkIchdddFHcdtttUa1atVixYkVcf/31sXr16oiIeOyxx6Jdu3bxox/9qNjXQelxyI8yumPHjhgxYkTedIUKFWLw4MFx4YUXRkTEww8/HFOmTInBgwfH//zP/0T16tVLZDsmTZqUmK5QoUL8+Mc/TsxL7WKwevXqtMpnV5544omoW7du4l/+z78rqX+b2u99p7lz58Ytt9wSrVq1ioYNG0bdunXjxBNPjIsuuiiefPLJ+Oyzz3b7Pd9777349a9/HU2aNIm6devGj370o+jRo0d88MEHBS6/efPmGDhwYHTq1ClOPPHEvG1t1apV/PznP48HHngg5s+fHzt27FDCAYDd8tJLL+32AIJFtaP++Mc/xvnnnx8NGjTY4/EgPv/88+jfv39iXvfu3aN69epRrly5yMrKit/97neJ10eNGlXs69gfsrOzY9WqVXn/3N/37TnkrxB+8skniW6a7dq1i7Zt28bkyZMjIuKwww6LOnXqRJ06daJt27bxhz/8YbfW26VLl7x1Z2RkRMOGDePcc8+Nyy+/vMDCv2jRosR07dq10+4PrFevXoGFZXfvaXz00Ufj4YcfTsz761//Gh07diy2/bl58+bo3r17TJ8+Pe21LVu2RHZ2dmRnZ8fjjz8ejz32WLRt27bI9U2ZMiWeeuqpxLwvvvgiXnzxxXjppZdi6NChccopp+S9tmHDhjj33HPz7gHNb+3atbF27dpYuHBhPPXUUzF06NA49dRTlXLYTQXdgF+5cuWYMmVKTJ48ObKzs6N27dpx9tlnx/nnnx/VqlUrdF2rV6+OV199NV5//fVYtmxZrF27Nho2bBitW7eOU089NRo1alTgPdKpIxHPmjUrypcvH+PHj49JkybF+vXro02bNtGpU6c4+eST8+qll19+OSZMmBDZ2dnRsGHDOOecc6JDhw5RuXLl3fqcGRkZMWnSpJg6dWosXbo0GjZsGGeffXace+658d3vfnev92lOTk7MmTMn5s6dG2+//XZ8/PHHcfzxx0fz5s3jlFNOiZNPPjkqVqyYt/yMGTPimmuuyZvu06dPdO3aNW2969evjxYtWiR+UyZMmJA2UMXeHoeIiC+//DKmTZsWEydOjIULF0atWrXipz/9aXTo0KHETp7CtyU3Nzf+9re/5U03btw4+vfvHwsXLow+ffrE+PHj46ijjopPP/00li9fHi+//HKJjPPw1ltvJdqtjRs3jmOPPTaxTOPGjRPTI0eOjNtuuy2vC2txrGN3zJ49O6688sq86YyMjHjmmWd2e/T43R30ZU/r0aJ8+umne1TXb9u2LV5//fWYM2dOvPHGG7Fq1arIzMyME088MX74wx/GCSecEFlZWXH00Ucf1ON+HPKBsHz58mmNi6VLl+7zetesWZMIQm+88Ua88cYb8cQTT8TQoUPjxBNPTPsy51fQSGwFFcL//Oc/u7U9Dz30UDz22GOJeX//+9/j9NNPL9bK8uqrr87rT1+ULVu2xDXXXBP/93//l9doK0hqGEwthNdcc03MmDEjb38NHDiwwDAIFL+33347+vbtGytXrkyceJk3b16MHj06hgwZklaXbd++PZ599tm466670tb36quvxquvvhr9+vWLa665Jnr06BGVKlUqchsWL14cd955Z3zyySd5895///0YPnx43H///dGuXbvo3r17zJs3L7GNM2fOjAkTJsTjjz8emZmZu2yA/fGPf8zrPpV/HUOGDImnnnpqjwcb27ZtW/zjH/+IP/3pTwWeqJw7d248/vjj0bx587j//vvzRns95ZRTombNmnnbMmDAgOjSpUvafsrOzk5MX3fddYkwuK/H4bPPPovevXvHlClTEr978+bNi/79+8eAAQMUEA4pmzdvTpSriy++OOrWrRtLlizJa09WrVo1qlatGnXr1i3yEWH74t13301MN2/ePG2Zgk7Gffjhh3ntyOJYx67MnDkzrr766rzp6tWrx9NPP71bI5+WdD1aXHX9l19+Gb///e9j3LhxifWsXbs2bR9PnTo1ateufdB+/w/5LqPf+973El/uLVu2xAUXXBDPPfdcREQMGzYsRowYkXZg99aGDRvisssui3Xr1qXNz6+gMxkFnVn4/PPPd/meDz74YCIMVqhQIUaNGlWsYTAi4p///GdaGDznnHNi2rRpkZ2dHU8++WRkZGQkXr/11lt3ud4ePXrEa6+9FnPmzEkMrLPzeOVveKR2Ye3fv38sWrQoli1bFq+88kqMGDEibrrppqhXr94uBwYCita1a9dEGMxv2bJlMXLkyLT5gwcPLjCEFLTcAw88EF9//XWRy910002JMJjf7373u+jatWsiDOY3e/bsmDBhwi63Jf+9NKlWrlwZt912W2zevHmP9t3AgQMLbMSkmj9/fvzyl7/Me/+MjIzEY0M2bNhQ4Em4iRMnJqZTHymyL8dhx44d0b9//0QYTG2k5b+KCYeC1DbDpEmTvpUT0KkXAgq6gJCRkZHW3vr000+LdR1FmTFjRiIM1qlTJ0aMGFGsYXBf6tHiqutnzZqVFgYPVWVLw4f8/e9/X+hrc+bMiTvuuCPat28fZ5xxRqGDz2RkZMSZZ54Z/fr1ixdffDFv5Km///3vaWcktmzZEo8++uh++WwPPvhgPPnkk4ntHDduXIk87D218XfUUUfFo48+Gscdd1xkZmbGWWedFffff39imZycnFixYkWh6zzrrLOie/fuceSRR0b16tXjlltuiZ/+9KeJZV544YVCg3TVqlXj8MMPj8MOOyyOOeaYOOWUU+I3v/lNTJo0KVq1auUXDvbRI488EosWLYrs7Ozo3bt34rVBgwYluiUtX748+vbtmzedmZkZQ4cOjcWLF8fy5ctj+vTpibPqw4cPj7lz5xb5/hkZGTF8+PBYunRpzJ49O63BsWTJkrj22mtj3rx5sXTp0rjjjjsSr48ZM2aXnzEjIyOefvrpWLx4cSxevDgGDx6cGIJ9/vz5MXPmzN3eZ8uWLYuHHnooMe+Pf/xjLFiwIJYtWxYTJ05M3EO+Zs2aRD3erl27tLo3/9D3H3/8ceJzXXbZZYluVvt6HN56660YPnx4Yhvuu+++WLhwYSxdujTGjh3r+ZUccipWrBjnnHNOon3YqlWrvFuJpk2bFgsXLoz169eX6HakjsFQWFfIqlWrJqbzB5niWEdhpk2bljgh1KRJkxg6dGj88Ic/LNb9sK/1aHHU9cuXL0/8/bhx4+Ktt96KFStWxBtvvBEzZsyIv/3tb3H11VenDS4kEB6Afvazn0W/fv0KvJckv/fffz+uuOKKmDVrVtprV155ZQwcODAuuuiiyMrKisqVK8f3vve9OP3002Ps2LFpl9hTB5FJff3LL79Me4+CBkE54ogjitzm/D/iVapUiYkTJ0aDBg1KZD/u7DaxU4cOHdIKwFlnnbXLv0tdx67mffLJJ3n7K3Xgnauvvjrq168frVq1issvvzzuvffeeOWVV3Z51QHYtZ49e8Z5550XlStXjszMzLjkkksSr2/cuDHR8Eh91tW9994bp556alSqVCnKly8ftWrViu7duyeWefHFF4vcht69e0fLli2jYsWKUaNGjejUqVPi9czMzLj55pujWrVqUbFixTj33HMTr8+fPz+++uqrXb7HT37yk6hUqVJUqlQp2rZtG3369Eksk3pFriip4fHiiy+OLl26RJUqVeKwww6L+vXrpwXXZ599Nj7++OOIiDjyyCMTVwknT54c7733Xt506j3pqftkX49D6hXXiy++OC699NL47ne/GxUrVoyTTjopbfvhUHD99denzdt5j1u/fv3i5z//ebRo0SLuuuuuPR70b28V9hzEPWnnFMc6dgai/Pc0n3rqqTFw4MASGQxmX+vR4qjr83fDr1ChQlSqVCkOO+ywKFeuXBxxxBFx7LHHRrt27eL2228vsWeYC4TF7KKLLor58+fH4MGD46qrriqyj/S99967R+vOzMxMG1L4k08+SRTA1C/Kf//737T1pHYrjYg45phjdns7tm/fXqL7MLVR9YMf/CBtme985ztpDzct6HPtVNDABEceeWShFfJl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FRJd3ydPnpzoVdG5c+cSOQ6nnHJK4u9HjRoVo0aNis8++yy++uqrWLJkyR7faw8Hus2bN0evXr3in//8Z7z77ruxYcOGRNjbvn17rF69OqZPn544aVMcvRRSg+dvf/vbxLxHHnkk1q5dG19//XUsW7YsrT6/+OKLi30dBTn88MPjzjvvTAzeNWnSpPj9739f4JW2fVFc9ei+1PUvv/xyDBo0KBYuXBhr1qyJjRs3xtdffx1bt26Njz76KK033t7csnCgKK8KSGrevHnaiEN7ol69ejF48OAC+yQfffTRMWbMmOjSpUuRBadp06YxdOjQPRos4phjjonnn38+OnXqlLgP5MILL4wXXnihWG76LVOmTAwZMiRuvPHGmD17dpHLVqhQIZ544om0MzyprrvuuiIfTj9kyJC92vYKFSrEo48+WqIDbsCBoHLlyvGnP/0p0aNg3LhxRT47qU2bNnHmmWcW+7Y0bNgwbr311ryBBzZs2BDXXnttkX8zaNCgb30fbtmyJa666qpCX2/WrNkePdd150m+v/71r3nzbr/99rj99tsLXL569eqJE1+pjaLMzMy034xatWql3ZteXMfhhBNOiMsvvzyeffbZvHl9+vTZp99GONDl5ubGmDFj0h5Vs/OqWf7eSjtdeeWVafPWrl27y8depQ7K9PbbbycuGFx22WXx0ksv5V3RGjt2bIwdO7bAdd10003RtGnTtPnFsY6CZGZmxn333RebN2/OG9F4woQJUa5cufjTn/5UYPt3bxRnPbq3df2WLVvSgnNhzjrrrGL77N+GQ/4K4ZFHHhmTJ0+O22+/Pdq1axe1a9dO619crVq1OOuss2LAgAHx3HPPpb1+3HHHxcSJE+P222+P008/PWrWrJlYplq1anHmmWfG448/HhMmTEgb5CC/Ro0axZw5c+K3v/1t1KtXL68CyMjIiFatWsVf//rXGD169F7dsF+3bt147rnn0q5Cdu7cudAHO+9K6v07lSpViqFDh+aNsFW9evXEZ2jcuHH89re/jddeey3teYIFad++fbz88svRoUOHvIKUkZERHTp0iGnTpqVVqr///e/j6aefjiuvvDKysrISXWXLly8f9erVi+uuuy5mzJgRrVu39gtHqdC+ffvEj2ZROnbsGA8++GCJDQrStWvXuPvuuw+q/TdgwIBC6+06depE//7993h/3XDDDbsVoJo2bRrDhg0rdETpI444Iu0RERHfnEwralCgfTkOZcuWjVtvvbXQOrxChQoxePBgBY9SobCR0nv27FnogDP7qnLlyvHEE0/ET37ykyKX+/Wvf514RE1xr6MwRxxxRDz44IOJewrHjx8fd955Z7F2myyuerQk6/qIby4GHewnzMrkHszXN/dBr169YsyYMfHEE0+kPduutPr000/Tht+dNm1aHHfccXYOHAQ+/vjjeO2112LBggWxZMmSeO+996Jq1apRt27daN68ebRo0SJOPPHEQgdqadKkSeJK1KxZs9Lux6hbt25iuqBlIiI++uijvG1ZvHhxrF69OurUqRO1a9eOY445Jk488cSoV69e1KxZM7E9u1r/+PHj45ZbbsmbvvPOOxNn6Tdu3Jg2OnN2dnbizG1BnzMjIyMmTZoUU6ZMiTfffDOysrLi7LPPjg4dOhR4X83u7KuIbwb5+de//hXz5s2LZcuWxbp166J+/fpx8sknR8uWLaN58+aFPjR6p//85z9pjbqZM2cWefJxX49DxDejEE6bNi0mTJgQCxYsiNq1a0e7du3ivPPOi+rVq0fDhg0Ty8+dO7fI7lpwoFu/fn288847sXTp0nj//fdj1apVsWjRotiyZUvUrFkzmjVrlld269WrV+A6ducKYarUK4Q7bdu2LebOnRszZ86MhQsXRk5OTmRlZUXr1q3j9NNPj6ysrF2ue1/Wsat6bu3atXHttdfG0qVL8+ZddNFFcffdd+9y0LKIb+5Xzn+r0auvvpoYKHFf69F9reu3b98eOTk58fbbb8eSJUvigw8+iOXLl8f69eujTp060bRp02jRokW0atXqoL46WKoDYe/evWP06NECYb4zYH/5y1/ShlBesWLFLkf5AziY7G6YO1Dk5ubGeeedF8uXL4+Ib+71eeCBBxxI2A+ef/75uO2222LixIlFDpLHnvnyyy8Tg2ZFfDPAy64GtqFklNp7CN1b9v8744wz4v3330+bf8EFFwiDAN9yo2nGjBl5YTAiEqP8AdqLB2O99vLLLyfm1alTp8BnDSIQlqiyZcs6+kWoUqVK/O///q8dAfAtGDNmTPTq1Sttfps2bdJGewY4WNx1110xbNiwtPldu3YVvr/NXFRaP/h9990Xq1at0l20gCB4+eWXx+TJk90LAnAAyczMjD/84Q+7/TxEYN8JKSWv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joiIzZs3x8svvxwTJkyI7OzsaNiwYZxzzjnRoUOHqFy58m59zoyMjJg0aVJMnTo1li5dGg0bNoyzzz47zj333Pjud797wAbD448/PhEIMzIy0pbbvHlzvPvuu7FkyZJYsmRJLF68OD744IOoUaNGNGjQIJo1axatWrVKuwH+qaeeigceeCBtfb169UrcU9isWbMYNWpUsRx/9q+33norVq9enTfdqFGjuOWWWxKBcMSIEdG5c+coV65c3rw5c+bEFVdckTd90003xW9+85u09W/atClat26dV94yMzPj1VdfjczMzLxlvvrqq5g2bVpMmjQp5s+fH7Vq1Yqf/vSn0aFDh6hevXo0bNgwsc65c+fG97///WLbB1u2bElMV61atdDvZrly5dIG59rXcra79nX9BdV7hx12WEycODGmTZsWixcvjssvvzyaN28e11xzTd5yffr0ia5du6atb/369dGiRYu86dq1a8eECRPiO9/5joJFqVXQ4G5ffPHFPpXjGTNmlHiZXLNmTTz55JOJeXfccUdaGEx12GGHxTnnnLPf6qyDsa2GQHjQe/vtt6Nv376xcuXKvHlr166NefPmxejRo2PIkCFpDbPt27fHs88+G3fddVfa+l599dV49dVXo1+/fnHNNddEjx49djky1eLFi+POO+9MDOzw/vvvx/Dhw+P++++Pdu3aRffu3WPevHmJbZw5c2ZMmDAhHn/88UTjs7BG8R//+MdEw3jnOoYMGRJPPfVU1KpV64A7Prm5ubFixYrEvB/+8Idpy913333x7LPPps1PvQH+tttui65duyYa/nuquI8/JWvatGmJ6UsuuSROOOGEqFKlSmzYsCEiIrKzs+Odd96JBg0a5C3XtGnTOOqoo2LNmjV5Jw+6du2adgJm0aJFiR/0bt26JcrjZ599Fn369InJkycnGibz5s2L/v37x4ABA0p8H6R+B6dPnx4vvPBCtG/fvsATLIUp6XJW3OsvqG7Nzc2NU045JWrWrJlXHw4YMCC6dOmStp+ys7MT09ddd50wSKm3du3atHn568W9Kcf7o0zm7yWxU/v27fdpXxR3nXWwttU4NJTqewi7du2aCIOplcfIkSPT5g8ePLjAMFDQcg888EB8/fXXRS530003FTjKX0TE7373u+jatWsiDOY3e/bsmDBhwi635frrr09UMKkV12233RabN28+oILgxo0bY/z48fHKK6/kzT/qqKOiTZs2e73efv36xdSpU/dp24r7+FNyNm7cmNZdtHnz5lGxYsXE1b+Ib87M5lexYsW44YYb8qa3bdsWixYtSnuP1PJ3xhln5P1/5717+cNgfjsHSipp3//+99MaPj179oyWLVvG3XffHaNGjYoFCxbE+vXri+X9iqOcFcf6C6pbc3NzIyMjI/Hoog0bNsT8+fPT/j61W1xhV06hNNi+fXu8//77afcjR3zzOIp9Kcf7o0ymdhU96qijokaNGvtl3+1unXWwtdUQCA8pjzzySCxatCiys7Ojd+/eidcGDRqUGFlq+fLl0bdv37zpzMzMGDp0aCxevDiWL18e06dPjw4dOuS9Pnz48F0OgpKRkRHDhw+PpUuXxuzZs9NuYF6yZElce+21MW/evFi6dGnccccdidfHjBmzy8+YkZERTz/9dCxevDgWL14cgwcPjgoVKuS9Pn/+/Jg5c+a3fiweeuihqFu3bhx//PHRpEmT6NmzZ95rjRs3juHDhxfYRfbYY4+NRx99NKZPnx4LFiyI5cuXx9tvvx2vvfZa3HPPPYlln3jiicjNzY2Ib84urlq1KnFMI7557MTOG+lXrVqV1120JI4/JWfRokWJ7pI7n68XEWknFv7+97/HV199lZj3k5/8JDE9fvz4xPS6desSJ43atWuXt/6Ib872Dh8+PPE3d999dyxYsCCWLl0ao0eP3i9ne8uUKRO33nprWk+CjRs3xjPPPBN9+vSJSy65JFq0aBG33357LF++vMD17G05210lsf6ePXvGa6+9FsuXL4+ZM2fGSSedlHes8hs5cmRifR9//HGibr3ssss8M5FSZ+dvct26daNBgwZxxhlnpJ0Eu+GGGxL3D+5tOS7pMpl6cqhBgwZRtmyyCbxp06a8z5v674ILLijxOutgaashEB5yevbsGeedd15Urlw5MjMz45JLLklrMH322Wd50/mvVkVE3HvvvXHqqadGpUqVonz58lGrVq3o3r17YpmdXQYK07t372jZsmVUrFgxatSoEZ06dUq8npmZGTfffHNUq1YtKlasmDbC1/z589MasgW9x09+8pOoVKlSVKpUKdq2bZs2BH3qmbcDSadOneKZZ56J2rVrF3pWrUOHDlGrVq2oUqVKlC9fPipUqBBHHnlkXHbZZVGzZs1EwP7444/3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AIBACAAAgEAIAACAQAgAAIBACAAAgEAIAACAQAgAAIBACAAAgEAIAACAQAgAAIBACAAAgEAIAACAQAgAAIBACAAAgEAIAACAQAgAACAQAgDA/9d+HQsAAAAADPK3HsP+sggQQgAAAIQQAAAAIQQAAEAIAQAAEEIAAACEEAAAACEEAABACAEAABBCAAAAhBAAAAAhBAAAQAgBAAAQQgAAAIQQAAAAIQQAAEAIAQAAEEIAAACEEAAAACEEAABACAEAABBCAAAAhBAAAAAhBAAAEEIAAACEEAAAACEEAABACAEAABBCAAAAhBAAAAAhBAAAQAgBAAAQQgAAAIQQAAAAIQQAAEAIAQAAEEIAAACEEAAAACEEAABACAEAABBCAAAAhBAAAAAhBAAAQAgBAAAQQgAAAIQQAAAAIQQAABBCAAAAhBAAAAAhBAAAQAgBAAAQQgAAAIQQAAAAIQQAAEAIAQAAEEIAAACEEAAAACEEAABACAEAABBCAAAAhBAAAAAhBAAAQAgBAAAQQgAAAIQQAAAAIQQAAEAIAQAAEEIAAACEEAAAACEEAABACAEAAIQQAAAAIQQAAEAIAQAAEEIAAACEEAAAACEEAABACAEAABBCAAAAhBAAAAAhBAAAQAgBAAAQQgAAAIQQAAAAIQQAAEAIAQAAEEIAAACEEAAAACEEAABACAEAABBCAAAAhBAAAAAhBAAAQAgBAACEEAAAACEEAABACAEAABBCAAAAhBAAAAAhBAAAQAgBAAAQQgAAAIQQAAAAIQQAAEAIAQAAEEIAAACEEAAAACEEAABACAEAABBCAAAAhBAAAAAhBAAAQAgBAAAQQgAAAIQQAAAAIQQAAEAIAQAAEEIAAAAhBAAAQAgbZJNtAAAAVUlEQVQBAAAQQgAAAIQQAAAAIQQAAEAIAQAAEEIAAACEEAAAACEEAABACAEAABBCAAAAhBAAAAAhBAAAQAgBAAAQQgAAAIQQAAAAIQQAAEAIAQAA2AL86KewhFN23QAAAABJRU5ErkJggg==");
		stage.addChild(background);


		var unemployed = [ null, null, null, null, null, null, null, null, null, null ];
		var jobs50 = [ null, null, null, null, null, null, null, null, null ];
		var jobs100 = [ null, null, null, null, null, null, null, null, null ];

		var un_a1_b1, un_a2_b2, un_a1_a2, un_b1_b2;
		var avg_a1_b1, avg_a2_b2, avg_a1_a2, avg_b1_b2;
		var pg_a_b, pg_1_2, pg_a, pg_b;
		var fair_label, unfair_label;

		var locations = [

			{ "group": unemployed, "index": 0, "x": 300, "y": 60, "w": 60, "h": 60 },
			{ "group": unemployed, "index": 1, "x": 360, "y": 60, "w": 60, "h": 60 },
			{ "group": unemployed, "index": 2, "x": 420, "y": 60, "w": 60, "h": 60 },
			{ "group": unemployed, "index": 3, "x": 480, "y": 60, "w": 60, "h": 60 },
			{ "group": unemployed, "index": 4, "x": 540, "y": 60, "w": 60, "h": 60 },
			{ "group": unemployed, "index": 5, "x": 300, "y": 120, "w": 60, "h": 60 },
			{ "group": unemployed, "index": 6, "x": 360, "y": 120, "w": 60, "h": 60 },
			{ "group": unemployed, "index": 7, "x": 420, "y": 120, "w": 60, "h": 60 },
			{ "group": unemployed, "index": 8, "x": 480, "y": 120, "w": 60, "h": 60 },
			{ "group": unemployed, "index": 9, "x": 540, "y": 120, "w": 60, "h": 60 },

			{ "group": jobs50, "index": 0, "x": 30, "y": 60, "w": 60, "h": 60 },
			{ "group": jobs50, "index": 1, "x": 90, "y": 60, "w": 60, "h": 60 },
			{ "group": jobs50, "index": 2, "x": 150, "y": 60, "w": 60, "h": 60 },
			{ "group": jobs50, "index": 3, "x": 30, "y": 120, "w": 60, "h": 60 },
			{ "group": jobs50, "index": 4, "x": 90, "y": 120, "w": 60, "h": 60 },
			{ "group": jobs50, "index": 5, "x": 150, "y": 120, "w": 60, "h": 60 },
			{ "group": jobs50, "index": 6, "x": 30, "y": 180, "w": 60, "h": 60 },
			{ "group": jobs50, "index": 7, "x": 90, "y": 180, "w": 60, "h": 60 },
			{ "group": jobs50, "index": 8, "x": 150, "y": 180, "w": 60, "h": 60 },

			{ "group": jobs100, "index": 0, "x": 690, "y": 60, "w": 60, "h": 60 },
			{ "group": jobs100, "index": 1, "x": 750, "y": 60, "w": 60, "h": 60 },
			{ "group": jobs100, "index": 2, "x": 810, "y": 60, "w": 60, "h": 60 },
			{ "group": jobs100, "index": 3, "x": 690, "y": 120, "w": 60, "h": 60 },
			{ "group": jobs100, "index": 4, "x": 750, "y": 120, "w": 60, "h": 60 },
			{ "group": jobs100, "index": 5, "x": 810, "y": 120, "w": 60, "h": 60 },
			{ "group": jobs100, "index": 6, "x": 690, "y": 180, "w": 60, "h": 60 },
			{ "group": jobs100, "index": 7, "x": 750, "y": 180, "w": 60, "h": 60 },
			{ "group": jobs100, "index": 8, "x": 810, "y": 180, "w": 60, "h": 60 }
		];

		function hitsLocation(image, location) {
			var hits = 0;
			for (var i = 0; i < 3; i++) {
				for (var j = 0; j < 3; j++) {
					var x = location.x + location.w / 6 + (location.w / 3) * i;
					var y = location.y + location.h / 6 + (location.h / 3) * j;
					var pt = image.globalToLocal(x, y);
					if (image.hitTest(pt.x, pt.y)) {
						hits++;
					}
				}
			}
			return hits;
		}

		function dropImage(image) {

			var maxHits = 0;
			var dropLocation = null;

			locations.forEach(function (location) {
				var hits = hitsLocation(image, location);
				if (hits > maxHits) {
					maxHits = hits;
					dropLocation = location;
				}
			});

			if (dropLocation != null) {
				
				var dropImage = dropLocation.group[dropLocation.index]; 

				var group = image.group;
				var index = image.index;
				group[index] = dropImage;

				if (dropImage != null) {
					dropImage.group = group;
					dropImage.index = index;
				}
				
				image.group = dropLocation.group;
				image.index = dropLocation.index;
				image.group[image.index] = image;
			}

			resetPositions();
		}

		function fairWhen(text, condition) {
			if (condition) {
				text.color = "#404040";
			}
			else {
				text.color = "#ff4040";
			}
		}

		function recalculateScore() {

			var score = {};

			var getScore = function (k) {
				if (score[k] === undefined) {
					score[k] = { "unemployed": 0, "salary": [] };
				}
				return score[k];
			}

			unemployed.forEach(function (x) {
				if (x != null) {
					x.affected.forEach(function (k) {
						getScore(k)["unemployed"] = getScore(k)["unemployed"] + 1;
					});
				}
			});

			jobs50.forEach(function (x) {
				if (x != null) {
					x.affected.forEach(function (k) {
						getScore(k)["salary"].push(50);
					});
				}
			});

			jobs100.forEach(function (x) {
				if (x != null) {
					x.affected.forEach(function (k) {
						getScore(k)["salary"].push(100);
					});
				}
			});

			var un = function (affected) {
				var totalEmployed = 0;
				var totalUnemployed = 0;
				affected.forEach(function (k) {
					totalUnemployed += getScore(k).unemployed;
					totalEmployed += getScore(k).salary.length;
				});
				return Math.floor(100 * totalUnemployed / (totalEmployed + totalUnemployed));
			}

			var a = un(["a1", "b1"]); un_a1_b1.text = a + "%";
			var b = un(["a2", "b2"]); un_a2_b2.text = b + "%";
			var c = un(["a1", "a2"]); un_a1_a2.text = c + "%";
			var d = un(["b1", "b2"]); un_b1_b2.text = d + "%";

			var m1 = Math.min(a, b, c, d);
			var m2 = Math.max(a, b, c, d);

			fairWhen(un_a1_b1, m1 == m2 || a > m1);
			fairWhen(un_a2_b2, m1 == m2 || b > m1);
			fairWhen(un_a1_a2, m1 == m2 || c > m1);
			fairWhen(un_b1_b2, m1 == m2 || d > m1);
			
			var avg = function (affected) {
				var totalEmployed = 0;
				var totalSalary = 0;
				affected.forEach(function (k) {
					totalEmployed += getScore(k).salary.length;
					getScore(k).salary.forEach(function (salary) {
						totalSalary += salary;
					});
				});
				if (totalEmployed == 0) {
					return 0;
				}
				return Math.floor(totalSalary / totalEmployed);
			}

			var e = avg(["a1", "b1"]); avg_a1_b1.text = "$" + e + "k";
			var f = avg(["a2", "b2"]); avg_a2_b2.text = "$" + f + "k";
			var g = avg(["a1", "a2"]); avg_a1_a2.text = "$" + g + "k";
			var h = avg(["b1", "b2"]); avg_b1_b2.text = "$" + h + "k";

			var m3 = Math.min(e, f, g, h);
			var m4 = Math.max(e, f, g, h);

			fairWhen(avg_a1_b1, m3 == m4 || e < m4);
			fairWhen(avg_a2_b2, m3 == m4 || f < m4);
			fairWhen(avg_a1_a2, m3 == m4 || g < m4);
			fairWhen(avg_b1_b2, m3 == m4 || h < m4);

			var avgSalary = function (affected) {
				var totalCount = 0;
				var totalSalary = 0;
				affected.forEach(function (k) {
					totalCount += getScore(k).salary.length;
					getScore(k).salary.forEach(function (salary) {
						totalSalary += salary;
					});
				});
				if (totalCount == 0) {
					return 0;
				}
				return totalSalary / totalCount;
			}

			var pg = function (affected1, affected2) {
				var avgSalary1 = avgSalary(affected1);
				var avgSalary2 = avgSalary(affected2);
				if (avgSalary1 == 0 && avgSalary2 == 0) {
					return 0;
				}
				if (avgSalary1 == 0 || avgSalary2 == 0) {
					return 100;
				}
				return Math.floor(100 * (Math.max(avgSalary1, avgSalary2) / Math.min(avgSalary1, avgSalary2))) - 100;
			}

			var i = pg(["a1", "a2"], ["b1", "b2"]); pg_a_b.text = i + "%";
			var j = pg(["a1", "b1"], ["a2", "b2"]); pg_1_2.text = j + "%";
			var k = pg(["a1"], ["a2"]); pg_a.text = k + "%";
			var l = pg(["b1"], ["b2"]); pg_b.text = l + "%";

			fairWhen(pg_a_b, i == 0);
			fairWhen(pg_1_2, j == 0);
			fairWhen(pg_a, k == 0);
			fairWhen(pg_b, l == 0);

			var fair = 
				(m1 == m2 || a > m1) && 
				(m1 == m2 || b > m1) && 
				(m1 == m2 || c > m1) && 
				(m1 == m2 || d > m1) &&
				(m3 == m4 || e < m4) &&
				(m3 == m4 || f < m4) &&
				(m3 == m4 || g < m4) &&
				(m3 == m4 || h < m4) &&
				(i == 0) &&
				(j == 0) &&
				(k == 0) &&
				(l == 0);

			fair_label.visible = fair;
			unfair_label.visible = !fair;

		}

		function resetPositions() {

			locations.forEach(function (location) {
				var image = location.group[location.index];
				if (image != null) {
					image.x = location.x;
					image.y = location.y;
				}
			});

			recalculateScore();
		}

		function legendImage(image, x, y) {
			var imageCopy = image.clone();
			imageCopy.x = x;
			imageCopy.y = y;
			imageCopy.scale = 0.75;
			imageCopy.alpha = 0.75;
			stage.addChild(imageCopy);
		}

		function placeImage(image, affected, group, index) {
			
			var imageCopy = image.clone();
			
			imageCopy.affected = affected;
			imageCopy.group = group;
			imageCopy.index = index;
			group[index] = imageCopy;

			imageCopy.on("pressmove", function (evt) {
					stage.setChildIndex(evt.currentTarget, stage.getNumChildren() - 1);
					evt.currentTarget.scale = 1.2;
					evt.currentTarget.x = evt.stageX - 30;
					evt.currentTarget.y = evt.stageY - 30;
					stage.update();   
				});

			imageCopy.on("pressup", function (evt) {
					evt.currentTarget.scale = 1.0;
					dropImage(evt.currentTarget);
					stage.update();   
			});

			imageCopy.cursor = "pointer";

			stage.addChild(imageCopy);
			return imageCopy;
		}

		fair_label = new createjs.Text("FAIR", "bold 100px sans-serif", "green");
		fair_label.alpha = 0.25;
		fair_label.x = 335;
		fair_label.y = 205;
		stage.addChild(fair_label);

		unfair_label = new createjs.Text("UNFAIR", "bold 100px sans-serif", "red");
		unfair_label.alpha = 0.25;
		unfair_label.x = 265;
		unfair_label.y = 205;
		stage.addChild(unfair_label);


		legendImage(a1, 30, 360);
		legendImage(b1, 60, 360);
		legendImage(a2, 30, 420);
		legendImage(b2, 60, 420);
		legendImage(a1, 30, 480);
		legendImage(a2, 60, 480);
		legendImage(b1, 30, 540);
		legendImage(b2, 60, 540);

		un_a1_b1 = new createjs.Text("100%", "bold 28px sans-serif", "black");
		un_a1_b1.x = 120;
		un_a1_b1.y = 370;
		stage.addChild(un_a1_b1);

		un_a2_b2 = new createjs.Text("100%", "bold 28px sans-serif", "black");
		un_a2_b2.x = 120;
		un_a2_b2.y = 430;
		stage.addChild(un_a2_b2);

		un_a1_a2 = new createjs.Text("100%", "bold 28px sans-serif", "black");
		un_a1_a2.x = 120;
		un_a1_a2.y = 490;
		stage.addChild(un_a1_a2);

		un_b1_b2 = new createjs.Text("100%", "bold 28px sans-serif", "black");
		un_b1_b2.x = 120;
		un_b1_b2.y = 550;
		stage.addChild(un_b1_b2);

		legendImage(a1, 300, 360);
		legendImage(b1, 330, 360);
		legendImage(a2, 300, 420);
		legendImage(b2, 330, 420);
		legendImage(a1, 300, 480);
		legendImage(a2, 330, 480);
		legendImage(b1, 300, 540);
		legendImage(b2, 330, 540);

		avg_a1_b1 = new createjs.Text("0", "bold 28px sans-serif", "black");
		avg_a1_b1.x = 390;
		avg_a1_b1.y = 370;
		stage.addChild(avg_a1_b1);

		avg_a2_b2 = new createjs.Text("0", "bold 28px sans-serif", "black");
		avg_a2_b2.x = 390;
		avg_a2_b2.y = 430;
		stage.addChild(avg_a2_b2);

		avg_a1_a2 = new createjs.Text("0", "bold 28px sans-serif", "black");
		avg_a1_a2.x = 390;
		avg_a1_a2.y = 490;
		stage.addChild(avg_a1_a2);

		avg_b1_b2 = new createjs.Text("0", "bold 28px sans-serif", "black");
		avg_b1_b2.x = 390;
		avg_b1_b2.y = 550;
		stage.addChild(avg_b1_b2);

		legendImage(a1, 570, 360);
		legendImage(a2, 600, 360);
		legendImage(b1, 750, 360);
		legendImage(b2, 780, 360);
		legendImage(a1, 570, 420);
		legendImage(b1, 600, 420);
		legendImage(a2, 750, 420);
		legendImage(b2, 780, 420);
		legendImage(a1, 585, 480);
		legendImage(a2, 765, 480);
		legendImage(b1, 585, 540);
		legendImage(b2, 765, 540);

		pg_a_b = new createjs.Text("0%", "bold 28px sans-serif", "black");
		pg_a_b.x = 665;
		pg_a_b.y = 370;
		stage.addChild(pg_a_b);

		pg_1_2 = new createjs.Text("0%", "bold 28px sans-serif", "black");
		pg_1_2.x = 665;
		pg_1_2.y = 430;
		stage.addChild(pg_1_2);

		pg_a = new createjs.Text("0%", "bold 28px sans-serif", "black");
		pg_a.x = 665;
		pg_a.y = 490;
		stage.addChild(pg_a);

		pg_b = new createjs.Text("0%", "bold 28px sans-serif", "black");
		pg_b.x = 665;
		pg_b.y = 550;
		stage.addChild(pg_b);

		placeImage(a1, ["a1"], unemployed, 0);
		placeImage(a1, ["a1"], unemployed, 1);
		placeImage(a1, ["a1"], unemployed, 2);
		placeImage(a2, ["a2"], unemployed, 3);
		placeImage(a2, ["a2"], unemployed, 4);
		placeImage(b1, ["b1"], unemployed, 5);
		placeImage(b1, ["b1"], unemployed, 6);
		placeImage(b1, ["b1"], unemployed, 7);
		placeImage(b2, ["b2"], unemployed, 8);
		placeImage(b2, ["b2"], unemployed, 9);

		resetPositions();

		createjs.Ticker.addEventListener("tick", function() {
			stage.update();
		});
	}
}