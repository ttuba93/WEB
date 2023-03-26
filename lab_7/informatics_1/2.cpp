#include <bits/stdc++.h>
#include <fstream>
using namespace std;
int main(){
    ifstream in("input.txt");
    ofstream out("output.txt");
    string inp, outp;
    in>>inp;
    int x=sizeof(inp);
    for( int i=0; i<x; i++){
        x=inp.find(' ');
        outp=inp.erase(x,x);
    }
    out<<outp<<endl;
    return 0;
}